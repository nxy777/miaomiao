// miniprogram/pages/message/message.js

//创建一个app对象，可以用app对象获取app.js中的userInfo
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userMessage:[],
    logged:false,
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
    // onReady只会触发一次
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (app.userInfo._id){
      this.setData({
        logged:true,
        userMessage:app.userMessage
      });
    }else{
      wx.showToast({
        title: '请先登陆',
        duration:2000,
        icon:'none',
        success:()=>{
          setTimeout(()=>{
            //  这里不能使用navigateTo，因为是tabber跳转，需要使用switchTap
            // 这里添加好友如果没有登陆，就跳转到我的登陆页面
            wx.switchTab({
              url: '/pages/user/user',
            })
          },2000);
        }
      })

    }
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
  onMyEvent(ev){
    // 列表清空后重新赋值
    this.setData({
      userMessage : []
    },()=>{
        this.setData({
          userMessage: ev.detail
        });
    });
  }
})