import logopic from "../../Images/logo.png"
import { useState } from "react"
import { Link } from "react-router-dom";

const Header = () => {
  const [AuthName,setAuthName] = useState("Login");
    return (   
      <div className="Header h-16  flex items-center justify-between bg-slate-900 text-slate-50">   
        <img className="logo w-12 h-12 mx-16" src={logopic} alt="Company-logo" />
        <ul className="flex items-center">
          <li><Link className="nav-header-link m-4 p-4 hover:text-gray-500" to="/">Home</Link></li>
          <li><Link className="nav-header-link m-4 p-4 hover:text-gray-500" to="/About-Us">About Us</Link></li>
          <li><Link className="nav-header-link m-4 p-4 hover:text-gray-500" to="/order">Order</Link></li>
          <li className="mx-4 px-4">
          <button className="Auth-btn hover:text-gray-500" onClick={
            ()=>{
              if(AuthName === "Login") setAuthName("Log Out");
              else setAuthName("Login");
            }
          }>{AuthName}</button>
          </li>
        </ul>
      </div>
    );
  };
  export default Header;