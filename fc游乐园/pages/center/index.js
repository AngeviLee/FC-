Page({
  data: {},
  
  sayHi: function() {
    console.log("我被点击了")
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
  }
})