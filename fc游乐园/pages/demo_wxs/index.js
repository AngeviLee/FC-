// 通过require导入一个模块
var util = require('../../utils/util')

Page({

  data: {
    navs: ['首页', '登录', '注册']
  },

  onLoad() {
    console.log("引入时间模块", util.now())
  }
})