const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

app.listen(3007, () => console.log('大事件接口启动'))

// ----------------------  配置应用级别的中间件 --------------------------------

app.use(cors())

app.use(express.urlencoded({ extended: false }))

// ---------------------- 加载路由模块 --------------------------------
// app.use('前缀'，require('xxxxxxx'))

app.use('/api', require(path.join(__dirname), 'routers/', 'login'))
app.use('/my/article', require(path.join(__dirname), 'routers/', 'category'))
app.use('/my/article', require(path.join(__dirname), 'routers/', 'article'))
app.use('/my', require(path.join(__dirname), 'routers/', 'user'))