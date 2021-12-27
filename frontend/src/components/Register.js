import React,{useState} from 'react';
import axios from "axios";
//this 
export default function Register(props) {
    const [username, setusername] = useState("ashw");
    const [email, setemail] = useState("ashwaq@gmail.com");
    const [password, setpassword] = useState("235");

    const registerFunc = (e) => {
        e.preventDefault();//ما يخلي الفورم يعمل ريفرش
        console.log("reg");
       
        const newUser = {//هذا الاوبجكت ابعثه على البوست
          // ES6
          email,//يجيب قيمة الايميل من الستيت
          // "email": "email value in the state"
          password,
          username,
        };
        axios
          .post(`http://localhost:5000/users/register`, newUser)
          .then((response) => {
            console.log("DATA: ", response.data);
          })
          .catch((err) => {
            console.log("ERR: ", err);
          });
      };

    

   return (
        <div className="Register">
            <form action="">


        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Write email here ..."
          onChange={(e) => {
            setemail(e.target.value);
          }}
          value={email}//نخاي القيم الي بستيت تجي من اليوزر  احفظهم في قاليو
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



        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Write username here ..."
          onChange={(e) => {
            setusername(e.target.value);//لازم احفظ الانبوت في ستيت لانها متغير 
          }}
          value={username}
        />
        <br />


        <input type="submit" value="Register" onClick={registerFunc} />
      </form>
         
        </div>
    );
}