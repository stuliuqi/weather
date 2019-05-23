var express=require('express');
var http=require('http');
var app=new express();


app.get('/',function(req,res){
    var key="fa751b0dd5e4dd2c4997255144305b9b";
    var list="";
    var options={
        host:"apis.juhe.cn",//访问的域名
        path:encodeURI("/simpleWeather/query?key="+key+"&city="+req.query.city),//路径和参数
        method:'get'
    }
    var message='';
    var request=http.request(options,function(res1){
        res1.on("data",function(chunk){
            message+=chunk;
        });
        res1.on("end",function(d){//监听end事件，请求结束后调用
            list=JSON.parse(message);//对接收到的数据进行编码
            res.send(list);});//在窗口打印出数据
    });
    request.end();

})
app.listen('3000','127.0.0.1');