import React from "react";

const Changer = (props) => {
    return(
      <div className="change-image-div">
        <div className="prev-div">
          <img src={props.prev} alt="prev-btn" onClick={props.handlePrevImage}/>
        </div>
        <div className="next-div">
          <img src={props.next} alt="next-btn" onClick={props.handleNextImage}/>
        </div>
      </div>
    )
  }

export default Changer