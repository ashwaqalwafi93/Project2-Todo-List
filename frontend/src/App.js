import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';//عند استخدام الستيت
import { Router,Route,Link, Routes } from 'react-router-dom';//اصدر الروايتر الروايتز هي الي فيها اكثر من راويت كل روايت فيها باث والمنت 
import axios from 'axios';
import Todo from './components/Todo';
import Add from './components/Add';
import Register from './components/Register';
import Login from './components/Login';

export default function App() {

  const [tasks, settasks] = useState([]);//objofarray
//استخدم اليوز افكت واحط فيها المناداه بدل من الزر
const [isLogedln, setisLogedln] = useState(false);//لما نعما لوق ان تجينا المعلومات نحفظه بستيت بالاب تغير القيم ونمرر المتغير سيت على اللوق ان الي تحت 
const [userName, setuserName] = useState('');

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

  const logoutfunc=()=>{
    setisLogedln(false)//اذا اليوزر طلع اخلي قيمته فولس ان ما فيه احد 
 setuserName(" ")//واليزو نيم فارغ 
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
      <p >Name:{userName}</p>{/*اسم اليوزر الي مسوي لوق ان  */}
      
      
        {/*الشى الي بروح له link to */}
    {/** الروايتر ما راح تتحققق الااذا كان فيه لو قان صح */}
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Todos</a>
    
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
             <Link to ="/home" className="nav-link active">
               Home
               </Link>
        </li>

        <li className="nav-item">
        <Link to ="/login"className="nav-link">login</Link>
        </li>
       

        <li className="nav-item">
        <Link to ="/register" className="nav-link">Register</Link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
    
      <Routes>
        <Route 
        path="/home"
        element={
        <div className='Home'>
      <Add createFunc={postNewTodo}/>
            {/*لما اضغط على هذا البوتن ينادي فانكشن تجيب الداتا  */}
      <button className="b1" onClick={getData}>Get Tasks</button>{/*this button bring all data in server */}
      <br/><br/>
      <button className="b2" onClick={deleteTask}>Delete Complted Tasks</button>
      <button className="b3" 
      onClick={()=>{
        filterData(true);
      }}
      >
        Get Data
      </button>

      <button className="b4"
       onClick={()=>{
        filterData(false);
      }}
      >
        Get Pending
      </button>
        
      </div>}
      /> 
      <Route 
      path="/login"
      element={
        
      <Login setisLogedln={setisLogedln} 
      setuserName={setuserName}/>}/>
{/*بروح اناديهم في االلوق ان */}

      <Route path="/register"element={<Register />}/>
      </Routes>
      <br/>
      <button onClick={logoutfunc}>Logout</button>{/**لما يضغط عل زر لوقاوت ينادي الفانكشن ويغير قيمها  */}
      
      {/*give his obj acsses function in app */}
     
   {/* {mapOverTasks} * */}  {/*this array */}
   
      
      
    </div>
  );
}


//لما التاسك عندي كيف اقدر اممرها للبروبز عن mapو
//التودو اقدر استخدم فيها التايتل وال ازكومبيلتد
//logout زر اللوق اوت وظبفت يخلي الازلوقاند ان واليوزرنيم يخليهم يرجعوا لقيمتهم الرئيسيه 