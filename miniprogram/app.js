//app.js
App({
  //初始化生命周期
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        //配置云开发环境id
        env:'dev-2g4haj4877d811f5',
        //追踪用户调用（在运营分析，用户访问中可以看到）
        traceUser: true,
        
      })
    }

    this.globalData = {},
    //定义一个全局信息，使各个用户都可以使用用户信息
    this.userInfo={},
    // 添加好友信息
    this.userMessage=[]
  }
})
