import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header renders");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              if (btnNameReact === "Login") {
                setbtnNameReact("Logout");
              } else {
                setbtnNameReact("Login");
              }
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;