import React,{useState} from 'react';
import axios from "axios";
import { Router,Route,Link, Routes } from 'react-router-dom';
//this 
export default function Login(props) {
    const [email, setemail] = useState("ashwaqalwafi@gmail.com");
    const [password, setpassword] = useState("123456");

    const loginFunc = (e) => {//نبعث ريكوست للوقان
        e.preventDefault();//ما يخلي الفورم يعمل ريفرش
        console.log("reg");
       
        const userinf = {//هذا الاوبجكت ابعثه على البوست
          // ES6
          email,//يجيب قيمة الايميل من الستيت
          // "email": "email value in the state"
          password,
         
        };

        axios
          .post(`http://localhost:5000/users/login`, userinf)
          .then((response) => {
            console.log("DATA: ", response.data);
            props.setisLogedln(true);

            props.setuserName(response.data.username);//راح يجيب البيانات من الداتا في البودي
          })
          .catch((err) => {
            console.log("ERR: ", err);
          });
      };

    

   return (
        <div className="m-3">
         {/*<div className="Login">*/}
          {/*
            <form action="">


        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Write email here ..."
          onChange={(e) => {
            setemail(e.target.value);
          }}
          value={email} //نخاي القيم الي بستيت تجي من اليوزر  احفظهم في قاليو
        />
        <br />


        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Write password here ..."
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          value={password}
        />
        <br />
        
        {/*<button type="button" class="btn btn-outline-primary">Primary</button> }
      
        <input type="submit" value="Login" onClick={loginFunc} 
        className="btn btn-outline-primary"/>
        <Link to ="/register">Don't Have An Account </Link>
      </form>
      */}

      <form>
      
  <div className="form-floating mb-3">
  <input
   type="email"
    className="form-control" 
    id="floatingInput"
   placeholder="name@example.com"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          value={email}
          />
  <label htmlFor="floatingInput">Email address</label>
</div>

<br/>
<div className="nb-3 form-floating">
  <input type="password" 
  className="form-control" 
  id="floatingPassword"
   placeholder="Password" 
    placeholder="Write password here ..."
    onChange={(e) => {
      setpassword(e.target.value);
    }}
    value={password}
  />
  <br/>
  <label htmlFor="floatingPassword">Password</label>
</div>


      <div className='text-center'>
        <input type="submit" 
        value="Login" 
        onClick={loginFunc} 
        className="btn btn-outline-primary"
        />

        <Link to ="/register"
         className="btn btn-link">Don't Have An Account </Link>

        </div>

        </form>{/*استخدام الفورم عشان يتنسق زين في نفس السطر */}
        </div>
    );
}