
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

//CRUD opreation:create,Read, Ubdate,Delete
//add new data
app.post('/tasks',(req,res)=>{
    
        console.log("25:",req.body);//pring data from postman(req.body)
        
       Todo.create(req.body,(err,newTask)=>{//req.bod bring all data
        if(err){
            console.log("erorr",err)//اذا كان فيه ابرور يوقف 
         }else{
           res.status(201).json(' create new Todo successfully '+newTask)
       }
    }); 
});

//in postman 
//delete by id
app.delete('/tasks/:id',(req,res)=>{
    console.log("37:",req.params.id);//this way read id from db
    //               accses to id for delete
    Todo.deleteOne({_id:req.params.id},(err,deleteObj)=>{// يجيني الاسم من المستخد البوست مان واحذفه والاهم الاسم بالداتا بيس والقيمه
            if(err){
                console.log("erorr",err)//اذا كان فيه ابرور يوقف 
            }else{
                deleteObj.deleteCount===1 //if user found done delete but else user not found
                ?res.json( 'delete one Todo successfully')
                :res.status(404).json('user not found  ') ;
             }        
    }); 
});


//ubdate in the task 
//ubdate spasifc element in id
app.put('/tasks/:id',(req,res)=>{
    //console.log(req.params)//تجيب الاسماء
    Todo.updateOne({_id:req.params.id},//الايدي الي بغيره الي داخله
        {title:req.body.newtitle}, (err,updateObj)=>{// {title:req.body.newtitle} وبغيره الى نيو تايتل 
            if(err){
                console.log("erorr",err)//اذا كان فيه ابرور يوقف 
                res.status(400).json(err)//ويرسل ان فيه مشكله بالسرفر
            }else{
                console.log(updateObj)
                updateObj.modifiedCount===1 //اذا كتبت الاسم وماحذفه يعني الاسم مو موجود من ضمن الجدول
                ? res.json('ubdate one TODO succesffuly')
                : res.status(404).json('user not found  ')
                  
                }       
    });  
});


// qery params /:
//qery params ? 
// get return finish task &  get return not finish task shortcut in down function
//حسب اليوزر ايش بدخل
//http://localhost:5000/filter?isCompleted=false
//             key=value&key=value
app.get('/filter',(req,res)=>{
    console.log(req.query)
    Todo.find({ isCompleted:req.query.isCompleted},(err,data)=>{//بدخل من اليوزر
       
        if(err){
            console.log("ERROR",err)         
        }else{
            res.json(data);
}   
});
});

/*
// get return finish task 
app.get('/completed',(req,res)=>{
    Todo.find({ isCompleted:true},(err,data)=>{
       
        if(err){
            console.log("ERROR",err)         
        }else{
            res.json(data);
}   
});
});
// get return not finish task 
app.get('/not_completed',(req,res)=>{
    Todo.find({ isCompleted:false},(err,data)=>{
       
        if(err){
            console.log("ERROR",err)         
        }else{
            res.json(data);
}   
});
});
*/


app.listen(5000,()=>{//هذا يشغل السرفر
    console.log('server  are working ..')
});