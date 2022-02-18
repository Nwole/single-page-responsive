import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import img1 from "./../../../images/blog33.jpg";
import Same from "../../Header/Same/Same";
const About = () => {
  return (
    <>
      <Same
        title="Know more about us"
        text=" of type and scrambled it to make a type specimen book. It has survived 
        not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the 
         release of Letraset sheets containing Lorem Ipsum passages, and more recently 
         with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        imgsrc={ img1}
        btn="Read More"
      />
    </>
  );
};

export default About;
