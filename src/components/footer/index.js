import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <>
      <div className='row footer'>
        <div className='col-md-6 logo-section'>
          <div className='items'>
            <div className='item'>
              <img src='./assets/images/footer-logo.png' alt='' />
              <span>Lasles</span>
              <span>VPN</span>
            </div>
            <div className='item'>
              <p>
                <span>LaslesVPN</span>
                <span>
                  is a private virtual network that has unique features and has high security.
                </span>
              </p>
            </div>
            <div className='item'>
              <i class='fab fa-facebook-f shadow'></i>

              <i class='fab fa-twitter shadow'></i>

              <i class='fab fa-instagram shadow'></i>
            </div>
            <div className='item copyright'>
              <span>©2020LaslesVPN</span>
            </div>
          </div>
        </div>
        <div className='col-md-2 p-0 d-flex flex-column align-items-start justify-content-start product'>
          <div className='head'>
            <p>Product</p>
          </div>
          <div className='links'>
            <ul className='p-0'>
              <li>
                <a href=''>Download</a>
              </li>
              <li>
                <a href=''>Pricing</a>
              </li>
              <li>
                <a href=''>Location</a>
              </li>
              <li>
                <a href=''>Server</a>
              </li>
              <li>
                <a href=''>Countries</a>
              </li>
              <li>
                <a href=''>Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-md-2 p-0 d-flex flex-column align-items-start justify-content-start engage'>
          <div className='head'>
            <p>Engage</p>
          </div>
          <div className='links'>
            <ul className='p-0'>
              <li>
                <a href=''>LaslesVPN ? </a>
              </li>
              <li>
                <a href=''>FAQ</a>
              </li>
              <li>
                <a href=''>Tutorials</a>
              </li>
              <li>
                <a href=''>About Us</a>
              </li>
              <li>
                <a href=''>Privacy Policy</a>
              </li>
              <li>
                <a href=''>Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-md-2 p-0 d-flex flex-column align-items-start justify-content-start earn'>
          <div className='head'>
            <p>Earn Money</p>
          </div>
          <div className='links'>
            <ul className='p-0'>
              <li>
                <a href=''>Affiliate </a>
              </li>
              <li>
                <a href=''>Become Partner</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
