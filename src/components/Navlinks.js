import React from "react"
import close from "../images/icon-close.svg"


const Navlinks = (props) => {
    return(
        <ul className={props.show ?"changeDisplay nav-links":"nav-links"}>
            <img src={close} className={"close-btn"} alt="close-btn" onClick={props.toggleMenu}/>
            <li><a>Collections</a></li>
            <li><a>Men</a></li>
            <li><a>Women</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
    )
}

export default Navlinks