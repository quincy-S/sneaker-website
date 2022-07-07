import React from "react"


const Navlinks = (props) => {
    return(
        <ul className={props.show ?"changeDisplay nav-links":"nav-links"}>
            <li><a>Collections</a></li>
            <li><a>Men</a></li>
            <li><a>Women</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
    )
}

export default Navlinks