import { Link, NavLink } from "react-router-dom";
import {auth,provider} from "../firebase/config";
import { signInWithPopup,signOut } from "firebase/auth";
import { useState } from "react";
import Logo from "../assets/logo.png";
export const Header = () => {
  const [isAuth,setisAuth] = useState(JSON.parse(localStorage.getItem("isAuth"))||false);
  function handleLogin()
  {
    signInWithPopup(auth,provider).then((result)=>{
      
      console.log(result);
      setisAuth(true);
      localStorage.setItem("isAuth",true)
    })
  }
  function handleLogout(){
  
    signOut(auth);
    setisAuth(false);
    localStorage.setItem("isAuth",false);
  }
 
  return (
    <header>
      <Link to="/"
       className="logo">
        <img src={Logo} alt="WriteNode"/>
        <span>Write Node</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end> Home </NavLink>
        {isAuth ?  (
          <><NavLink to="/create" className="link"> Create </NavLink>
        <button onClick={handleLogout} className="auth"><i className="bi bi-box-arrow-right"></i>  Logout</button>
        </>) : 
        (<button onClick={handleLogin} className="auth"><i className="bi bi-google"></i>  Login</button>)}
       
        
       
      </nav>
    </header>
  )
}
