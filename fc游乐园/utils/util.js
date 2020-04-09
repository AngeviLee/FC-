// 通过module导出一个模块
module.exports.now = function () {
  return (new Date()).getTime()
}