import React, { Fragment } from 'react'
import mainLogo from '../assets/Logo-A.png'
import './Navbar.css'

function Navbar() {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "PORTFOLIO", link: "/" },
    { name: "GALLERY", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  return (
    <Fragment>
      <div className='navBar'>
        <div className='menu-logo'>
          <img src={ mainLogo } alt='' />
        </div>
        <div>
          <nav className='NavbarItems'>
            <div className='pages'>
              <ul>
              {Links.map((Link) => (
                <li key={Link.name}>
                  <a href={Link.link}>{Link.name}</a>
                </li>
              ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      
    </Fragment>
  )
}

export default Navbar;