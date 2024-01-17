var express = require('express');
var { formidable } = require('formidable')
var router = express.Router();
var path = require('path')

// Book模型
const BookModel = require('../models/BookModel')
// User模型
const UserModel = require('../models/UserModel')

// 测试数据库
router.get('/', async function (req, res, next) {
  // let results = await BookModel.create({
  //   name: '西游记',
  //   author: '吴承恩666',
  //   price: 19.9
  // })
  // let results1 = await UserModel.create({
  //   username: 'React',
  //   password: '123',
  //   gender: '女'
  // })
  // console.log('@@@', results, results1)
  // res.render('index', { title: 'Express' });

  for (let i = 0; i < 50000; i++) {
    let results = await BookModel.create({
      name: '红楼梦',
      author: '曹雪芹',
      price: 23
    })
  }

  res.render('index', { title: 'Express' });
});



// 显示网页的（表单）路由
router.get('/portrait', (req, res) => {
  res.render('portrait')
})

// 处理文件上传路由
router.post('/portrait', (req, res) => {
  // 创建表单对象
  const form = formidable({
    multiples: true,
    // 设置上传文件的存储目录
    uploadDir: path.resolve(__dirname, '../public/images'),
    // 保持文件后缀
    keepExtensions: true
  });
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log('一般表单字段【fields】---：', fields)
    console.log('上传文件的对象【files】---：', files)
    // 服务器保存该图片的访问 URL
    // http://localhost:3000/images/2cf28e0b07ed3
    // 00.jpg(不建议存储这样的路径，ip会改变，影响访问)
    // /images/96234bd9d54813f585353fc00.jpg(推荐这样存储)
    //将来将此图片访问路径数据保存在数据库中
    let url = '/images/' + files.avatar[0].newFilename
    // res.send(url)
    // res.json({ fields, files });
    res.render('index', { url })
  });
})

module.exports = router;
