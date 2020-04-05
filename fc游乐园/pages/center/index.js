Page({
  data: {},
  
  sayHi: function(ev) {
    console.log("我被点击了")
    console.log("事件对象信息", ev)
  },

  in() {
    console.log("input的focus")
  },

  out() {
    console.log("input的blur")
  },

  pTap() {
    console.log("父元素事件被触发了")
  },

  cTap() {
    console.log("子元素事件被触发了")
  },

  send() {
    console.log("小程序提供了专门的方法发起网络请求")
    // wx 是小程序提供的一个全局对象，包含了若干的方法
    // 例如request用来发起网络请求，类似于$.ajax()、Axios()
    wx.request({
      url: 'https://wx.maoyan.com/mmdb/movie/v3/list/hot.json',
      method: 'get',
      // data: {},
      success: function(info) {
        console.log("请求响应信息", info)
      },
      fail: function() {}
    })

  }
})