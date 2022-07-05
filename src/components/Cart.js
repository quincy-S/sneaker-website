import React from "react";
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";


const Cart = ({zeroAmount, amount, number, IMAGETHUMB, total}) => {

  return (
    <div className="cart-popup">
      <div className="cart-header">
        <h2>Cart</h2>
      </div>
      <hr />
      <div className="cart-body">
        {amount === 0 ? <EmptyCart /> : <FullCart zeroAmount={zeroAmount} IMAGETHUMB = {IMAGETHUMB} total={total} number={number} amount={amount}/>}
      </div>
    </div>
  )
}

export default Cart