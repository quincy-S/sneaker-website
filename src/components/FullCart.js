import React from "react";
import trashcan from "../images/icon-delete.svg"


const FullCart = (props) => { 

    function trashItems(){
      if(props.add === true){
        props.setAdd(false)
        props.clearCart(false)
      }      
    }

    return(
      <div className="fill-cart">
        <div className="img-des-amt">
          <img className="check-img" src={props.IMAGETHUMB[props.number]} alt="product-img"/>
          <span>
            <p className="check-out-text">Fall Limited Edition ... <br />
              $<span className="unit-price">125.00</span> x <span className="prod-num">{props.amount} </span>
              <span className="fin">$<span className="final-price">{props.total}</span>.00</span>
            </p>
          </span>
          <img className="trashcan-img" src={trashcan} alt="trashcan-img" onClick={trashItems}/>
        </div>
        <div className="checkout-btn-div">
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    )
  }

export default FullCart