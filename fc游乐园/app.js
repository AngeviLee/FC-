// 1. 必须调用App函数
// 2. App 函数是由小程序内置提供
// 3. App 接受一个对象类型数据作为参数
App({
  // 这里的属性和方法皆为全局
  name: '我是全局name',

  sayHi() {
    console.log('我是全局方法111')
  },

  // 小程序的生命周期
  onLaunch() {
    // 启动时，全局只执行一次
    console.log('小程序启动了')
  },

  onShow() {
    console.log('小程序前台运行了')
    // wx.requnss()  //  为触发onError()而故意伪造
  },

  onHide() {
    console.log('小程序后台运行了')
  },

  onError() {
    console.log('执行某api出错了，主动抛出异常')
  },

  onPageNotFound() {
    console.log('暂时不知道其用途')
  }
})