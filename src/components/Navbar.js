import React,{useState} from "react";
import logo from "../images/logo.svg"
import cartImage from "../images/icon-cart.svg"
import profileImage from "../images/image-avatar.png"
import menu from "../images/icon-menu.svg"
import Navlinks from "./Navlinks";



const Navbar = () => {

    const [show, setShow] = useState(false)

    function toggleMenu(){
        let copyShow = show
        setShow(!copyShow)
    }

    return(
      <nav>
      <div className="logo-menu-div">
        <img className="menu-btn" src={menu} alt="menu-btn" onClick={toggleMenu}/>
        <Navlinks show={show} toggleMenu={toggleMenu}/>
        <img src={logo} alt="logo-img"/>
      </div>
        <div className="navbarimg-div">
          <img src={cartImage} alt="cart-img" /> 
          <img className="prof-img" src={profileImage} alt="pro-img"/>
        </div>
      </nav>
    )
  }

  export default Navbar