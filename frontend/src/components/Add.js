import React,{useState} from 'react';
//this 
export default function Add(props) {
    //كيف اغير الستيت من عنصر الاد الى ستيت 
    const [newTitle, setnewTitle] = useState("");

   const createNewTodo =()=>{
       console.log('createNewTodo from Add')
       props.createFunc({title:newTitle,isCompleted:false});
   }
   return (
        <div className="Add">
            {/*input always link in state , save in state  */}
            <input type='text'placeholder='Write new title here'onChange={(e)=>{
                setnewTitle(e.target.value);
            }
            }/>
            {/*e change the new title */}
            {/*make functin button the (Create New Todo) make the nwe task*/}
            <button onClick={createNewTodo}>Create New Todo </button>  
        </div>
    );
}