import React from "react"


const Navlinks = (props) => {
    return(
        <ul className={props.show ?"changeDisplay nav-links":"nav-links"}>
            <li>ctions</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    )
}

export default Navlinks
