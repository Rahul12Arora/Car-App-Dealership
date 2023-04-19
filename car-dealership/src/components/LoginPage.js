import React, { useState } from 'react'
import './loginpage.css'
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Submitted!', { username, password, email });
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
        <div className='formele'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
}

export default LoginPage