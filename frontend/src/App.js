import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';//عند استخدام الستيت

import axios from 'axios';
import Todo from './components/Todo';
import Add from './components/Add';
import Register from './components/Register';

export default function App() {

  const [tasks, settasks] = useState([]);//objofarray
//استخدم اليوز افكت واحط فيها المناداه بدل من الزر
  useEffect(()=>{
  getData();
},[]);

const getData=()=>{
  //this function bring data from server (use axsos) becouse bring data from server(npm i axios)
  //from backend(GET/tasks)
  console.log('Get data')

      axios
      .get(`http://localhost:5000/tasks`)
      .then((response)=>{
         //console.log('Response',response);
          console.log('Data',response.data);
          //لما تجيني الداتا من السرفراحفظها بستيت
          settasks(response.data);
           
      })
      .catch((err)=>{
          console.log('ERR',err);
      });
  }
const postNewTodo=(body)=>{
 
  console.log('func postNewTodo from App')
      axios//هذا الكود الاكسوس
      .post('http://localhost:5000/tasks',body)
      .then((response)=>{
         //console.log('Response',response);
          console.log('Data',response.data);
          //لما تجيني الداتا من السرفراحفظها بستيت
         // settasks(response.data);
         //change react hooks state using spread operator
         //reblace using upp
         getData();
         
      })
      .catch((err)=>{
          console.log('ERR',err);
      });
  }
  const deletTodo=(id)=>{
 
    console.log('delettaskAp from App')
        axios//هذا الكود الاكسوس
        .delete(`http://localhost:5000/tasks/${id}`)//استخدم هذي الطريقه عشان اقدر اقرا قيمة الادي بحرف الذاء``
        .then((response)=>{
           //console.log('Response',response);
            console.log('Data',response.data);
            //لما تجيني الداتا من السرفراحفظها بستيت
           // settasks(response.data);
           //change react hooks state using spread operator
           //reblace using upp
           getData();
           
        })
        .catch((err)=>{
            console.log('ERR',err);
        });
    }
    const EdittTodo=(id,newStatus)=>{
 
      console.log('Edit from App')
          axios//هذا الكود الاكسوس
          .put(`http://localhost:5000/tasks/${id}/${newStatus}`)//عشان اجيب الادي الي بعدل عليه مع القيمة الجديده /ابي عكس القيمة القديمه 
          .then((response)=>{
             //console.log('Response',response);
              console.log('Data',response.data);
              //لما تجيني الداتا من السرفراحفظها بستيت
             // settasks(response.data);
             //change react hooks state using spread operator
             //reblace using upp
             getData();
             
          })
          .catch((err)=>{
              console.log('ERR',err);
          });
      }
      //يحذف كل التاسك
      const deleteTask=()=>{
 
        console.log('delete all task from App')
            axios//هذا الكود الاكسوس
            .delete('http://localhost:5000/tasks')//استخدم هذي الطريقه عشان اقدر اقرا قيمة الادي بحرف الذاء``
            .then((response)=>{
               //console.log('Response',response);
                console.log('Data',response.data);
                //لما تجيني الداتا من السرفراحفظها بستيت
               // settasks(response.data);
               //change react hooks state using spread operator
               //reblace using upp
               getData();
               
            })
            .catch((err)=>{
                console.log('ERR',err);
            });
        };
//يفلتر المخلص والي مو مخلص 
const filterData=(status)=>{

      axios//هذا الكود الاكسوس
      .get(`http://localhost:5000/filter?isCompleted=${status}`)//يمرر الحاله ترو او فولس 
      .then((response)=>{
         //console.log('Response',response);
          console.log('Data',response.data);
          //لما تجيني الداتا من السرفراحفظها بستيت
          //settasks(response.data);
           
      })
      .catch((err)=>{
          console.log('ERR',err);
      });
  }

  const mapOverTasks=tasks.map((taskObj,i)=>//سوينا ماب كل مرا نرجع todo
  <Todo 
      key={taskObj._id} 
      task={taskObj}
      deletTodo={deletTodo}
      EdittTodo={ EdittTodo } />);

  //this name jsx
  return (
    <div className="App">
      <p class='p1'>My Tasks</p>
      <Add createFunc={postNewTodo}/>
            {/*لما اضغط على هذا البوتن ينادي فانكشن تجيب الداتا  */}
      <button class="b1" onClick={getData}>Get Tasks</button>{/*this button bring all data in server */}
      <br/><br/>
      <button class="b2" onClick={deleteTask}>Delete Complted Tasks</button>
      <button class="b3" 
      onClick={()=>{
        filterData(true);
      }}
      >
        Get Data
      </button>

      <button class="b4"
       onClick={()=>{
        filterData(false);
      }}
      >
        Get Pending
      </button>
      
      {/*give his obj acsses function in app */}
     
   {/* {mapOverTasks} * */}  {/*this array */}
   <Register/>
      
    </div>
  );
}


//لما التاسك عندي كيف اقدر اممرها للبروبز عن mapو
//التودو اقدر استخدم فيها التايتل وال ازكومبيلتد
//