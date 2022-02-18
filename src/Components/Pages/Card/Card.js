import React from 'react'
import { Link } from "react-router-dom";
// import myPicture from "./../../../images/tele4.jpg";
const Card = (props) => {
  return (
    
        <div className="cards">
          <h2>{props.title1}</h2>
          <img src={props.imgsource} alt="gee" className="serviceImg" />
          <p>{props.desc1} </p>
           
         
          <div className="btnBox">
          <div className="btn">
              <Link to="/about" className="readMore">
              {props.btnService}
              </Link>
          </div>
      </div>
      </div>
    
  )
}

export default Card