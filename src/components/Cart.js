import React from "react";
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";


const Cart = (props) => {
  return (
    <div className={props.showCart ? "cart-popup open-popup" : "cart-popup"}>
      <div className="cart-header">
        <h2>Cart</h2>
      </div>
      <hr />
      <div className="cart-body">
        {props.add && props.amount > 0 
        ? <FullCart 
            setAdd={props.setAdd} 
            clearCart={props.clearCart} 
            IMAGETHUMB = {props.IMAGETHUMB} 
            total={props.total} 
            number={props.number} 
            amount={props.amount} 
            add={props.add}/>
        : <EmptyCart />}        
        
      </div>
    </div>
  )
}

export default Cart

