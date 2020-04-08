Page({
  data: {
    msg: 'Hello World!',
    students: [
      {
        name: 'liyading',
        age: 25,
        gender: '男'
      },
      {
        name: '2yy',
        age: 25,
        gender: '女'
      },
      {
        name: 'Lee',
        age: 25,
        gender: '男'
      }
    ]
  },

  // 页面级别的生命周期
  onLoad() {
    console.log('当页面加载完成时执行，只执行一次')
  },

  onShow() {
    console.log('当页面显示时执行')
  },

  onReady() {
    console.log('当页面初次渲染完成时执行，只执行一次')
  },

  onHide() {
    console.log('当页面看不见时执行')
  }
})