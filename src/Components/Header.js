import logopic from "../../Images/logo.png"
const Header = () => {
    return (
      <div className="Header">
        <img className="logo" src={logopic} alt="Company-logo" />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Order</li>
          <li>My Profile</li>
        </ul>
      </div>
    );
  };
  export default Header;