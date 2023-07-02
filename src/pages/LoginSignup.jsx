import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Logsign.css"
import eyeOpen from "../images/eyeOpen.png"
import eyeClose from "../images/eyeClose.png"
import Logo from "../images/logo.svg"
import Loader from "../images/loader.svg"
import axios from 'axios'


const LoginSignup = () => {

//     history.pushState(null, null, document.URL);
// window.addEventListener("popstate", function () {
//   history.pushState(null, null, document.URL);
// });

    const navigate = useNavigate();

    const [logError, setLogError] = useState(false)
    const [logErrorMsg, setLogErrorMsg] = useState("")

    const [logInProcess, setLogInProcess] = useState(false)


  
    const [password, setpassword] = useState(true)
    const openpassword =()=>{
        setpassword(!password)
    }

  

  const [username, setUsername] = useState('');
  const [passWord, setPassWord] = useState('');

     

      // const handleChangeLogin = (e) => {
      //   setFormDataLogin({ ...formDataLogin, [e.target.name]: e.target.value });
      // };

      const closeErr = () => {
        setLogError(false);
      };



     
  const handleLogin = async () => {

    setLogInProcess(true)

    const url = 'https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/auth/sign-in';
    const headers = {
      'X-DeviceKey': 'ulego-app-f11ad7dd-e351-4395-b2ad-eae2de81090c'
    };
    const data = {
      username: username,
      password: passWord
    };

    // console.log(data)
    try {
      const response = await axios.post(url, data, { headers });
      console.log('Sign-in successful!');
      const token = response.data.result[0].token;
      // Do something with the token
    localStorage.setItem("token", token)
    if(localStorage.getItem("token")){
      const timeout = setTimeout(() => {
        // Code to execute after 5 seconds
        navigate("/dashboard");
      }, 4000);
  
      return () => {
        clearTimeout(timeout);
      };
      
    }
    console.log(response)
    } catch (error) {
      console.error('Sign-in failed:', error);
      setLogErrorMsg("Sign In Failed");
      setLogInProcess(false)
    
    }
  };




  return (
    <div className='sign-log'>
        <div className="error" style={logError ? {}: {display:"none"}}>
            <div className="error-box">
                An error occurred lease try again
                <button onClick={closeErr}>ok</button>
            </div>
        </div>
        

        <div className="login">
          <img src={Logo} alt="" />
                <h1>Welcome back</h1>
                <input
                 type="email"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 placeholder="Email"/>
                <div className="password">
                <input type={password? "password": "text"}
                 placeholder='Password...' 
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
                className='input'/>
                <div onClick={openpassword}>
                    {password? <img src={eyeClose} alt="/"  /> :<img src={eyeOpen} alt="/" />}
                </div>
                
                
                </div>
                <i style={{color:"red"}} >{logErrorMsg}</i>
                 <button onClick={handleLogin}>{logInProcess ? <div style={{display:"flex", justifyContent:"center",alignItems:"center", gap:"10px"}}><img src={Loader} alt={"jhgjg"}/> {"Please wait.." }</div> : "Login"}</button>
                {/* <Link>I forgot my password</Link> */}
                {/* <p>Don't have an account? <span onClick={openSignup}>Sign up</span></p> */}
            </div>
          

            
       
    </div>
  )
}

export default LoginSignup