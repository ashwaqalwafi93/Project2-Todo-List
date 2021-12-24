import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';//عند استخدام الستيت
//import Post from './components/Post';

export default function App() {


  const getData=()=>{//this function bring data from server use state

  }
  return (
    <div className="App">
      <button onClick={getData}>GET TASKS</button>{/*this button bring all data in server */}
      <p>app</p>
    </div>
  );
}


//لما التاسك عندي كيف اقدر اممرها للبروبز عن mapو
//التودو اقدر استخدم فيها التايتل وال ازكومبيلتد
//