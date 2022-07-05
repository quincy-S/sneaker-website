import React,{useState} from "react";
import logo from "../images/logo.svg"
import cartImage from "../images/icon-cart.svg"
import profileImage from "../images/image-avatar.png"
import Navlinks from "./Navlinks";
import Popup from "./Popup"

const Burger = ({toggleMenu}) => {
  return(
    <div className="burger" onClick={toggleMenu}>
      <div className="bar"></div>
    </div>
  )
}

const Navbar = ({amount}) => {

    const [show, setShow] = useState(false)

    function toggleMenu(){
        let copyShow = show
        setShow(!copyShow)
    }

    return(
      <nav>
        <div className="logo-menu-div">
          <Burger toggleMenu={toggleMenu}/>
           <Navlinks show={show} toggleMenu={toggleMenu}/>
          <img src={logo} alt="logo-img"/>
        </div>
        <div className="navbarimg-div">
          {amount > 0 ? <Popup amount={amount}/> : null}
          <img src={cartImage} alt="cart-img" /> 
          <img className="prof-img" src={profileImage} alt="pro-img"/>
        </div>
      </nav>
    )
  }

  export default Navbar