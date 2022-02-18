import React from "react";
import { Link } from "react-router-dom";
import homeImg from './../../../images/blog5.jpg'

const Same = ({title, text, btn, imgsrc}) => {
  return (
   
    <div className="mainSection">
    <div className="contextBox">
      <h1 className="home_title">{title}</h1>
      <p className="home_desc">{text}</p>
      <div className="btnBox">
          <div className="btn">
              <Link to="/about" className="readMore">
              {btn}
              </Link>
          </div>
      </div>
    </div>
    <div className="imgContainer">
        <img src={imgsrc} alt="gee" />
    </div>
  </div>
    
  );
};

export default Same;
