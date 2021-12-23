
const express=require('express');//create server,make import
const app=express();
const db=require('./db');//تصدير الداتا بيس
const Todo=require("./todo")//file todo.js import
console.log(Todo)

//midellware read the body
app.use(express.json());


app.get('/',(req,res)=>{//بطلع جميع البيانات 
     res.json('Get / is working');
});


//pring all data
app.get('/tasks',(req,res)=>{//بطلع جميع البيانات 
    Todo.find({},(err,data)=>{
        if(err){
            console.log("ERROR",err)//اذا كان فيه ابرور يوقف 
            
        }else{

    res.json(data);
}   
});
});




//add new data
app.post('/tasks',(req,res)=>{
    
        console.log("25:",req.body);//pring data from postman(req.body)
        
       Todo.create(req.body,(err,newTask)=>{//req.bod bring all data
        if(err){
            console.log("erorr",err)//اذا كان فيه ابرور يوقف 
         }else{
           res.status(201).json('succes create new Todo successfully'+newTask)
       }
    }); 
});


app.listen(5000,()=>{//هذا يشغل السرفر
    console.log('server  are working ..')
});