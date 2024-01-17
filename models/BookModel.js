const mongoose = require('mongoose')

let BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number
})
// 6.创建模型对象  对文档操作的封装对象
let BookModel = mongoose.model('books', BookSchema)

// 暴露
module.exports = BookModel

