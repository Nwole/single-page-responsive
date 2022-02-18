import React from 'react'
import './footer.css'


import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <>
    <footer>
        <div className='container'>
            <div className='icons'>
            <FacebookIcon className='footerIcon'/>
            <TwitterIcon className='footerIcon'/>
            <LinkedInIcon className='footerIcon'/>
            <InstagramIcon className='footerIcon'/>
            </div>

           
        </div>
        <div className='copyRight'>
            <p className='text'>All Rights Reserved &copy;</p>
            <p className='text'>Made with love by Khamme</p>
            </div>
    </footer>
    </>
  )
}

export default Footer