import React, { use, useState } from 'react'
import { Navigate } from 'react-router-dom';

const login = () => {
    const [uname,setUname]=useState("");
    const[pass,setPass]=useState("");
    const  [error,setError]=useState("");
    function handellogin(e){
        e.preventDefault();
        if(uname==="admin" && pass==="manager"){
          Navigate("/admin")
        }
        else if(uname==="user" && pass==="abes"){
         Navigate("/user")
        }
        else{
            setError("Authenticate Error :check user Crediantial")
          Navigate("/")
        }
    }
  return (
    <div>
      
      <div className='login'>
        <h1>Sign In Here</h1>
        <h2 style={{color:"red"}}>{error}</h2>
    <form onSubmit={handellogin}>
        UserName:<input type='text' value={uname} placeholder='Enter the user name'
        onChange={(e)=>setUname(e.target.value)}
        />
        <br />
        Password:<input type='password' value={pass} placeholder='Enter the user name'
        onChange={(e)=>setPass(e.target.value)}
        />
        <br />

        <button>SignIn</button>
        <button>Reset</button>
    </form>

      </div>
    </div>
  )
}

export default login;