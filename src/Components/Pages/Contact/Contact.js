import React from 'react'
import './contact.css'
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <>
        <h1>Contact</h1>
        <form className='contact'>
        <div>
          <label htmlFor='name'>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div>
          <label htmlFor='password'>Name</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <div>
          <label htmlFor='mobile'>Name</label>
          <input type="mobile" placeholder="Enter your mobile" />
        </div>

        <div className="btnBox">
          <div className="btn">
              <Link to="/" className="readMore">
              Submit Details
              </Link>
          </div>
      </div>
        </form>
    </>
  )
}

export default Contact