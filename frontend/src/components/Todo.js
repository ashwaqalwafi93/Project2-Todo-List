import React from 'react'

export default function Todo(props) {
    //كل مرا بمرر تاسك عن طريق بروبز
    //way distrcture
    const{_id , title, isCompleted}=props.task;{/*بوصل الاي دي والتايتل عن طريق الستدركشين  */}
    return (
        <div className="Todo">
            <p>Todo</p>
            {/* راح ينعرض النص من البروبز عرض هذه البيانات داخل التودو*/}
            <p>title:{title}</p>
           
            
        </div>
    )
}