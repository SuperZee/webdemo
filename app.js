/**
 * Module dependencies
 */
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Load Routes
var timer = require('./routes/timer');
var users = require('./routes/users');

// create app instance
var app = express();

// set static views path and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// set log on dev
app.use(logger('dev'));
app.use(bodyParser.json());
// cookies parser
app.use(cookieParser());
// static files dic express托管静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 配置路由
app.use('/', routes);
app.use('/users/', users);

// 404错误统一处理
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// 开发环境，500错误接收，输出堆栈追踪信息
if (app.get('env') == 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        /*
         * app.routes 对象存储了所有的被HTTP verb定义路由。
         * 这个对象可以用在一些内部功能上，比如Express不仅用它来做路由分发，
         * 同时在没有app.options()定义的情况下用它来处理默认的OPTIONS行为。
          * 你的应用程序或者框架也可以很轻松的通过在这个对象里移除路由来达到删除路由的目的。
         */
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// 生产环境，500错出处理
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
/*‘
 这个文件不再处理路由信息，处理http请求的事情交给routes/目录下
 对应的路由处理
 app.listen(3000, () => {
 console.log('server start');
 });

 app.get('/', function (req, res) {
 res.end('Hello Node');
 });

 app.get('/user', (req, res) => {
 console.log('hello user');
 });

 app.get('/user/:id', (req, res) => {
 console.log('hello id');
 });
 */
