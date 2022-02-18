import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import photo from "./../../images/reg33.jpg";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="headerWrapper">
          <Link to="/">
            <img src={photo} alt="gee" className="headerImg" />
          </Link>
        </div>

        <ul className="headerList">
          <li className="headerListItems " activeClassName="active">
            <Link className="link"  to="/">
              Home
            </Link>
          </li>
          <li className="headerListItems">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="headerListItems">
            <Link className="link" to="/services">
              Services
            </Link>
          </li>
          <li className="headerListItems">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="headerListItems">
            <Link className="link" to="/policy">
              Policy
            </Link>
          </li>
        </ul>

        <div className="headerIcon">
          <IconButton>
          <SearchIcon className="icon" />
          </IconButton>
          <IconButton>
          <PersonIcon className="icon" />
          </IconButton>
          <IconButton>
          <CallIcon className="icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
