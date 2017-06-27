var express=require('express');
var app=express();
app.use(express.static('public'));

app.get('/',function (req,res){
    res.send('Hello World!!');
});
app.get('/login',(req,res)=>{
    res.send('Login Page!!');
});
app.listen(3000, function(){
    console.log('Example app listening in ',30000);
});