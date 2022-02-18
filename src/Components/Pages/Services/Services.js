import React from "react";
import "./services.css";
import Data from '../../Data/Data'
import Card from "../Card/Card";
const Services = () => {
  return (
    <>
      <h1 className="serviceHeader">Services</h1>
      <div className="services">
        
        {Data.map((values) => {
          return (
            <Card 
              title1= {values.title}
              imgsource={values.imgsrc}
              desc1 ={values.desc}
              btnService ={values.btnService}
            />
          )
        })}
        </div>
      
    </>
  );
};

export default Services;
