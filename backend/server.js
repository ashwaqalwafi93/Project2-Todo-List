
const express=require('express');//create server,make import
const app=express();
const db=require('./db');//تصدير الداتا بيس
const Todo=require("./todo")//file todo.js import
console.log(Todo)
app.use(express.json());


app.get('/',(req,res)=>{//بطلع جميع البيانات 
     res.json('Get / is working');
});

app.get('/tasks',(req,res)=>{//بطلع جميع البيانات 
    res.json('Get / is working');
});

/*
app.post('/users',(req,res)=>{
    User.create(req.body,(err,newuser)=>{
            if(err){
                console.log("erorr",err)//اذا كان فيه ابرور يوقف 
                res.status(400).json('uservaliditon ')
            }else{

        res.json('succes create new Todo ')
    }
    }); 
});*/


app.listen(5000,()=>{//هذا يشغل السرفر
    console.log('server  are working ..')
})