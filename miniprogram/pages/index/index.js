// miniprogram/pages/index/index.js

//创建一个app对象，可以用app对象获取app.js中的userInfo
const app = getApp()

//创建数据库,初始化数据库
const db = wx.cloud.database()
//获取db command库的函数
const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {
   imgUrls:[
      '../../images/photo/01.jpg',
      '../../images/photo/02.jpg',
      '../../images/photo/03.jpg',
    ],
    listData:[ ],
    current:'links'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // 返回用户的部分信息field
  onReady: function () {
    this.getListData();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleLinks(ev){
    let id = ev.target.dataset.id;
    
    wx.cloud.callFunction({
      name:'update',
      data:{
        collection:'users',
        doc:id,
        data:"{links: _.inc(1)}"
      }
    }).then((res)=>{
      // console.log(res);
      //  成功会返回1
      let updated  = res.result.stats.updated;
      // 这里更新一次刷新一次所有点赞列表
      if (updated){
        let cloneListData = [...this.data.listData];
        for (let i = 0; i < cloneListData.length; i++){
          if (cloneListData[i]._id == id) {
            cloneListData[i].links++;
          }
        }
        this.setData({
          listData:cloneListData
        });
      }
    });
  },
  handleCurrent(ev){
    let current = ev.target.dataset.current;
    if (current == this.data.current){
      return false;
    }
    this.setData({
      current
    });
    this.getListData();
  },
  getListData(){
    db.collection('users').field({
      userPhoto:true,
      nickName:true,
      links:true
    })
    // 根据current当前值进行排序
    .orderBy(this.data.current,'desc')
    .get().then((res)=>{
      // console.log(res.data)
      this.setData({
        listData:res.data
      });
    });
  },
  handleDetail(ev){
    let id = ev.target.dataset.id;
    wx.navigateTo({
      url:  '/pages/detail/detail?userId=' + id
    })

  }
})