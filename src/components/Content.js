import React, {useState} from "react";
import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import prev from "../images/icon-previous.svg"
import next from "../images/icon-next.svg"
import Changer from "./Changer"
import {IMAGES,IMAGETHUMB} from "../images/Images"
import Cart from "./Cart";

const Content = (props) => {

    const [number, setNumber] = useState(0)
    
  
    function handleNextImage(){
      if(number < 3){
        let copyNumber = number
        setNumber(copyNumber + 1)
      }
    }
  
    function handlePrevImage(){
      if(number>0){
        let copyNumber = number
        setNumber(copyNumber - 1)
      }
    }
  
    return (
      
      <div className="content-div">
        
        <div className="img-div">
          <Cart total ={props.total} amount={props.amount} number={number} IMAGETHUMB={IMAGETHUMB}/>
          <img className="product-img" src={IMAGES[number]} alt="product-img"/>
          <Changer prev={prev} next={next} handlePrevImage={handlePrevImage} handleNextImage={handleNextImage}/>
        </div>
        <div>
          <div className="text-div">
            <h3>SNEAKER COMPANY</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low profile sneakers are your perfect casual wear companion. 
            Featuring a durable rubber outer sole, they'll withstand everything 
            the weather can offer.</p>
            <span className="price-container">
              <h1 className="price">$125.00</h1>
              <button className="percentage-btn">50%</button>
              <p className="canc-text">$250.00</p>
            </span>
            <div className="btn-div">
              <span className="multi-btn">
                <img className="minus-img arith" src={minus} alt="minus-btn" onClick={props.handleDecrease}/>
                  <h5 className="total" id="amount">{props.amount}</h5>
                <img className="plus-img arith" src={plus} alt="plus-btn" onClick={props.handleIncrease}/>
              </span>
              <button className="cart-btn">
                <i className="fa-solid fa-cart-shopping"></i>
                Add to Cart
              </button>
            </div>
  
          </div>
        </div>
      </div>
    )
  }

export default Content