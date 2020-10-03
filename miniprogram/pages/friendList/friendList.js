// miniprogram/pages/friendList/friendList.js
//创建一个app对象，可以用app对象获取app.js中的userInfo
const app = getApp()

//创建数据库,初始化数据库
const db = wx.cloud.database()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    friendList : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 查看好友列表
    db.collection('users').where({
      friendList : app.userInfo._id
    }).field({
      userPhoto : true,
      nickName : true
    }).get().then((res)=>{
      this.setData({
        friendList: res.data
      });
    });
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

  }
})