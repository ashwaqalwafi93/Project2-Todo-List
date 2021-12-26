import React from 'react'

export default function Todo(props) {
    //كل مرا بمرر تاسك عن طريق بروبز
    //way distrcture
    const{_id , title, isCompleted}=props.task;{/*بوصل الاي دي والتايتل عن طريق الستدركشين  */}
    return (
        <div className="Todo">
            <p class="p2">Todo</p>
             {/*بسوي الشيكك بوكس وخلي قيمته الاiscompleted اذا كان ترو يحط لي صح على الي خلصتهم  */}
            <input type="checkbox" checked={isCompleted}/>
           
            {/* راح ينعرض النص من البروبز عرض هذه البيانات داخل التودو*/}
            <span style ={{textDecoration:isCompleted?'line-through':'none'}}>{title}</span>
            {/*التايتل او المهمه الي خلصتها احط عليها خط بنص الكلام اسمه line throug */}
           
           
           <button onClick={()=>{//طريقه ثانبه نفس طريقة البوست 
               props.deletTodo(_id);
           }}>X</button>

        <button onClick={()=>{//طريقه ثانبه نفس طريقة البوست 
               props.EdittTodo(title);
           }}>Edit</button>

        </div>
    )
}