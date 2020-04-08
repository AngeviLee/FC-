const app = getApp()

Page({
  data: {
    gender: '男',
    hobby: []
  },

  handleSubmit(ev) {
    console.log('我被提交了')
    console.log("gender", this.data.gender)
    console.log("hobby", this.data.hobby)
    console.log(ev)
  },

  getRadioValue(ev) {
    console.log("单选框被点击了", ev)
    this.setData({
      gender: ev.detail.value
    })
    console.log("this.data.gender", this.data.gender)
  },

  getCheckboxValue(ev) {
    console.log("能被触发")
    console.log("复选框ev",ev)
    this.setData({
      hobby: ev.detail.value
    })
    console.log("this.data.hobby", this.data.hobby)
  },

  getGlobalData() {
    console.log("我在表单页面获取到的全局app", app.name)
    app.sayHi()
  }
})