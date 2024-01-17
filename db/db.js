module.exports = (function () {
  return new Promise((resolve, reject) => {
    // 1.安装
    // 2.引入mongoose
    const mongoose = require('mongoose')
    // 3.连接mongodb数据库
    mongoose.connect('mongodb://127.0.0.1:27017/user')
    // 4.设置回调 【once: 事件回调函数只执行一次】
    mongoose.connection.once('open', async () => {
      console.log('连接成功')
      resolve()
    })
    mongoose.connection.on('error', (error) => {
      console.log('连接失败')
      reject(error)
    })
    mongoose.connection.on('close', () => {
      console.log('连接关闭')
    })
  })
})()

