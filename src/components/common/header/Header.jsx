import React, {useState} from "react";
import { Logo2 } from "../../Asset/Images";
import { Link, NavLink } from "react-router-dom";
import"./Header.css"

function Header() {
  const [toggleMenu, HandletoggleMenu] = useState(false)
  return (
    <header className="HeaderCon">
    <div className="HeaderWrapper">
      <div className="logo">
        <img src={Logo2} alt="" />
      </div>
      <nav>
        <ul style={{ top: toggleMenu ? "60px" : "-700px" }}>
          <li>
            <NavLink to="/Home">Home</NavLink>
            
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
            
          </li>
          <li>
            <NavLink to="/Media">Media</NavLink>
            
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
            
          </li>
          <li >
            <Link className="Donat" to="/donate">Donate</Link>
            
          </li>
        </ul>
      </nav>

      <div className="hambugger">
        <button onClick={() => HandletoggleMenu(!toggleMenu)}>
          <i className="bi bi-list"></i>
        </button>
      </div>
    </div> 
    </header> 
  );
}
export default Header;
