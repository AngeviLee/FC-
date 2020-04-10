// pages/storage/index.js
Page({

  setStorage() {
    // 设置数据
    wx.setStorage({
      key: 'name',
      data: '月月'
    })

    // 同步设置数据
    wx.setStorageSync('age', 18)
  },

  getStorage() {
    wx.getStorage({
      key: 'name',
      success(res) {
        console.log('读取数据res', res)
      }
    })

    // 同步读取数据
    var value = wx.getStorageSync('age')
    console.log('获取的同步数据', value)
  },

  removeStorage() {
    // 删除一条数据
    wx.removeStorage({
      key: 'age'
    })
  },

  clearStorage() {
    wx.clearStorage()
  }

})