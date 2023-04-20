import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './loginpage.css'

function LoginPage() {
    const navigate = useNavigate();
    // const [success, setSuccess] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    async function handleSubmit(e){
    e.preventDefault();

    // console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
    const response=await fetch('http://localhost:5000/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({username:username,password:password})
    })
    const data = await response.json();
    if(data.success) navigate('/mainpage')
    else{
      alert('enter correct credentials')
    }
  }
  
    return (
      <form onSubmit={handleSubmit}>
        <div className='formele'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className='formele'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
}

export default LoginPage