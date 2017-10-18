var express=require('express');
var app=express();

app.use(express.static('public'));
//

app.get('/',function (req,res){
    
    res.send('Hello World!!');
});
app.post('/',function (req,res){
    
    //res.send('Hello World!!'+ JSON.stringify(req.body.test));
    res.send('Hello World!!'+ req.set);
});

app.get('/login',(req,res)=>{
    res.send('Login Page!!');
});

app.get('/dynamic',(req,res)=>{
    var output=`<body><h1>node!!</h1></body>`;
    //ddd
    res.send(output);
});


app.get('/route', (req,res)=>{
    req.console.log("test!!");
    res.send('Route Hello <img src="/Capture001.png"> ');
})
app.listen(3001, function(){  
    console.log('Example app listening in ',3001);
});