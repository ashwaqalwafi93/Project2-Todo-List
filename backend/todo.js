

const {Schema,model} = require('mongoose');

const todoshcema=new Schema(
{
    title:String,
    isCompleted:Boolean,
    
});


const Todo=model('Todo',todoshcema)//ستاخذ نسخه من اليوزر سكيما

//اسوي نصدير للمودل
module.exports=Todo;