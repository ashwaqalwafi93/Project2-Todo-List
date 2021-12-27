

const {Schema,model} = require('mongoose');

const Usershcema=new Schema(
{
    username:{type:String,required:true,unique:true},//required لازم يكونون موجودين 
    password:{type:String,required:true},
    email:String
    
});


const User=model('user',Usershcema)//ستاخذ نسخه من اليوزر سكيما

//اسوي نصدير للمودل
module.exports=User;