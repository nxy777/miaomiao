// components/callPhone/callPhone.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    styleIsolation:'apply-shared',
  },
  properties: {
    // 父子通信，与detail中的组件进行通信
    phoneNumber:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCallPhone(){
      wx.makePhoneCall({
        phoneNumber: this.data.phoneNumber,
      })
    }
  }
})
