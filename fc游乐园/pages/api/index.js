
Page({
  handleLoading() {

    wx.showLoading({
      title: '数据加载中'
    })

    setTimeout(() => {
      wx.hideLoading({}) 
    }, 2000)

  },

  handleToast() {

    // 相当于this.$Message.warning()
    wx.showToast({
      title: '我是一条消息'
    })


  },

  handleModal() {
    wx.showModal({
      title: '删除一条信息',
      content: '删除后不可恢复！！！'
    })
  },

  showActionSheet() {
    wx.showActionSheet({
      itemList: ['拍照', '从本地相册选择']
    })
  }
})