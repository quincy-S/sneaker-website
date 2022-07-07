import React,{useState} from "react";

const Burger = ({toggleMenu}) => {

    const [menuOpen, setMenuOpen] = useState(false)

    function trigger(){
      toggleMenu()
      menuOpen?setMenuOpen(false):setMenuOpen(true)
      
    }

    return(
      <div className={menuOpen? "burger-menu open": "burger-menu"} onClick={trigger}>
        <div className="burger-bar"></div>
      </div>
    )
  }

export default Burger