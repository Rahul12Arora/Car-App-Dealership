import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
    <ul className='navbar'>
      <li className='login'><Link to={"/login"}>Login</Link></li>
      <li className='home'><Link to={"/"}>Home</Link></li>
      <li className='signup'><Link to={"/signup"}>SignUp</Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>  
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>  
      <Route path="/signup" element={<SignupPage></SignupPage>}></Route>  
    </Routes>
    </>
  );
}

export default App;
