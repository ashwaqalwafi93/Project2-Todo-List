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
        <div className="m-3">
            
         
    <form>
      
      <div className="form-floating mb-3">
          {/*input always link in state , save in state  */}
      <input
       type='text'
       placeholder='Write new title here'
       onChange={(e)=>{
           setnewTitle(e.target.value); {/*e change the new title */}
       }}
       className='form-control'
          
    />
    <label htmlFor="floatingInput">New Todo Title</label> 
    </div>
    <br/>
    
    
    
          <div className='text-center'>
         {/*make functin button the (Create New Todo) make the nwe task*/}
          <button className='btn btn-success' onClick=
           {createNewTodo}>
               Create New Todo 
        </button>
            </div>
    
            </form>{/*استخدام الفورم عشان يتنسق زين في نفس السطر */}
         
    
        </div>
    );
}

  