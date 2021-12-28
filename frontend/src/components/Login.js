import React,{useState} from 'react';
import axios from "axios";
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
          })
          .catch((err) => {
            console.log("ERR: ", err);
          });
      };

    

   return (
        <div className="Login">
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


        <input type="submit" value="Login" onClick={loginFunc} />
      </form>
         
        </div>
    );
}