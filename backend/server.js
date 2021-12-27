
const express=require('express');//create server,make import
const app=express();
const cors=require('cors');// used becouse links open other bage

const db=require("./db");//تصدير الداتا بيس
const Todo=require("./todo")//file todo.js import
console.log(Todo)

const User=require("./Users");

//midellware read the body
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{//بطلع جميع البيانات 
     res.json('Get / is working');
});


//pring all data 
//http://localhost:5000/tasks
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
//http://localhost:5000/tasks and add from body
app.post('/tasks',(req,res)=>{
    
       // console.log("25:",req.body);//pring data from postman(req.body)
        
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
//http://localhost:5000/tasks/61c3e711774dd669298d1f69
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
//http://localhost:5000/tasks/61c40f94a9329db173f2a3a0 change from body
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
    //                 this filter
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


//delete all tasks is completed 
//http://localhost:5000/tasks
app.delete('/tasks',(req,res)=>{
   
    //               accses to id for delete
    Todo.deleteMany({isCompleted:true},(err,deleteObj)=>{// يجيني الاسم من المستخد البوست مان واحذفه والاهم الاسم بالداتا بيس والقيمه
            if(err){
                console.log("erorr",err)//اذا كان فيه ابرور يوقف 
            }else{
                console.log(deleteObj)
                deleteObj.deletedCount===0 //لانه اكثر من واحد ما اكتب واحد
                ?res.json('There is no completed todo found')
                :res.json('Delete all completed todo successfully  ') ;
             }        
    }); 
});



//update in on status task 
//غير  الكومليتد من صح الخطا والعكس
//http://localhost:5000/tasks/61c40f8ca9329db173f2a39e/true
app.put('/tasks/:id/:isCompleted',(req,res)=>{
    console.log(req.params);
    Todo.updateOne(
        {_id: req.params.id},
        {isCompleted: req.params.isCompleted},
         (err,updateObj)=>{
            if(err){
                console.log("erorr",err);//اذا كان فيه ابرور يوقف 
                res.status(400).json(err);//ويرسل ان فيه مشكله بالسرفر
            }else{
                console.log(updateObj)
                updateObj.modifiedCount===1 //اذا كتبت الاسم وماحذفه يعني الاسم مو موجود من ضمن الجدول
                ? res.json('ubdate one TODO succesffuly')
                : res.status(404).json('this todo is not found  ');
            }
                      
    }
    );  
});

//تسجيل يوزر جديد
//http://localhost:5000/users/register
app.post('/users/register',(req,res)=>{
    
    User.create(req.body,(err,newuser)=>{//req.bod bring all data
     if(err){
         console.log("erorr",err)//اذا كان فيه ابرور يوقف 
         res.status(400).json({massage:'this email already taken'});//عشان يونيك هذا الايميل موجدد مسبقا */}
        }else{
        res.status(201).json(' create '+newuser + 'successfully ');
    }
 }); 
});


//لما نبعث داتا نحط بوست حتى لوكان لوق ان
//بتاكد ان هذا اليوزر موجدو والايميل يونيك مستحيل اثنين نفس بعضهم 
//اذاكان الايميل مو موجود يهني اليوزر مو عندنا 
///اذا الباسورد غلط والايميل  صحح
//user
app.post("/users/login", (req, res) => {
    User.find({ email: req.body.email }, (err, arrUserFound) => {//اذا ما حصلت الايميل يدخل على الاف ويقول الايرور 
      if (err) {
        console.log("ERROR: ", err);
      } else {
        // console.log(arrUserFound);
        if (arrUserFound.length === 1) {//اذا الايميل موجود يروح ويتاكد من السورد اذا الايميل غط ينزل اخر سطر 
          // we found the user
          if (req.body.password === arrUserFound[0].password) {
            // password correct
            res.status(200).json({
              message: "Login Successfully",
              username: arrUserFound[0].username,
            });
          } else {
            // password incorrect
            res.status(400).json({
              message: "Wrong password",
            });
          }
        } else {
          res.status(404).json({
            message: "The email entered is not registered",
          });
        }
      }
    });
});

app.listen(5000,()=>{//هذا يشغل السرفر
    console.log('server  are working ..')
});

//code server need monngose , express and cors