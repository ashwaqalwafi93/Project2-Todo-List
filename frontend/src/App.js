import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';//عند استخدام الستيت
import axios from 'axios';
import Todo from './components/Todo';


export default function App() {

  const [tasks, settasks] = useState([]);//objofarray
//استخدم اليوز افكت واحط فيها المناداه بدل من الزر
  useEffect(()=>{
  getData();
},[])

  const getData=()=>{
    //this function bring data from server (use axsos) becouse bring data from server(npm i axios)
    //from backend(GET/tasks)
    console.log('Get data')

        axios//هذا الكود الاكسوس
        .get('http://localhost:5000/tasks')
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
  const mapOverTasks=tasks.map((taskObj,i)=>//سوينا ماب كل مرا نرجع todo
  <Todo keغ={i} task={taskObj}/>);

  //this name jsx
  return (
    <div className="App">
      <p>app</p>
      
            {/*لما اضغط على هذا البوتن ينادي فانكشن تجيب الداتا  */}
      <button onClick={getData}>GET TASKS</button>{/*this button bring all data in server */}
      
      {mapOverTasks}{/*this array */}
    </div>
  );
}


//لما التاسك عندي كيف اقدر اممرها للبروبز عن mapو
//التودو اقدر استخدم فيها التايتل وال ازكومبيلتد
//