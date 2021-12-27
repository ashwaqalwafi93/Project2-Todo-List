

const {Schema,model} = require('mongoose');

const todoshcema=new Schema(
{
    title:String,
    isCompleted:Boolean
    
});


const Todo=model('Todo',todoshcema)//ستاخذ نسخه من اليوزر سكيما

//اسوي نصدير للمودل
module.exports=Todo;
//اذا بشغل الملف ع النت اكتب في القت باش npm i لان البكج جيسون تنزل كل الاشياء الي تعتمد عليها


