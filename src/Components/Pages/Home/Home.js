import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import homeImg from './../../../images/blog5.jpg'
import Same from "../../Header/Same/Same";
const Home = () => {
  return (
    <>
     <Same 
     title="Learning made easy"
     text=" of type and scrambled it to make a type specimen book. It has survived 
     not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the 
      release of Letraset sheets containing Lorem Ipsum passages, and more recently 
      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
     imgsrc={homeImg}
     btn="Read More"
     />
    </>
  );
};

export default Home;
