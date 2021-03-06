var express = require("express"); //引入express模块
var http = require("http"); //引入http模块
var url=require("url");//引入url模块
var router = require("router"); //引入路由模块

var app = express(); //创建app对象
//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
//返回的数据
var questions = [{
        data: 213,
        num: 444,
        age: 12
    },
    {
        data: 456,
        num: 678,
        age: 13,
        name:"sb"
    }
];

//写个接口123,当以get的形式发送ajax时，就会返回json格式的数据
app.get('/123', function (req, res) {
    res.status(200),
        res.json(questions)
});

//配置服务端口,将代码跑在3000端口
var server = app.listen(3000, function () {

    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})