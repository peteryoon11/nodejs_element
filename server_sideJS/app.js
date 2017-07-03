var express=require('express');
var app=express();

app.use(express.static('public'));


app.get('/',function (req,res){
    res.send('Hello World!!');
});

app.get('/login',(req,res)=>{
    res.send('Login Page!!');
});
app.get('/dynamic',(req,res)=>{
    var output=`<body><h1>node!!</h1></body>`;
    
    res.send(output);
});


app.get('/route', (req,res)=>{
    res.send('Route Hello <img src="/Capture001.png">');
})
app.listen(3000, function(){
    console.log('Example app listening in ',30000);
});