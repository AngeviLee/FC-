//index.js
//获取应用实例
const app = getApp()

console.log('我是首页获取到的app', app)
console.log('下面我将要进行更改')
Page({
  gotoForm() {
    app.name = '我是全局修改的name'
    wx.navigateTo({
      url: '/pages/form/index'
    })
  }
})
