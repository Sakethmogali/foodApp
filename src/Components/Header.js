import logopic from "../../Images/logo.png"
import { useState } from "react"
const Header = () => {
  const [AuthName,setAuthName] = useState("Login");
    return (   
      <div className="Header">   
        <img className="logo" src={logopic} alt="Company-logo" />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Order</li>
          <li>My Profile</li>
          <button className="Auth-btn" onClick={
            ()=>{
              if(AuthName === "Login") setAuthName("Log Out");
              else setAuthName("Login");
            }
          }>{AuthName}</button>
        </ul>
      </div>
    );
  };
  export default Header;