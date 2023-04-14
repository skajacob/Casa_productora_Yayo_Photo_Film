import React, { Fragment } from 'react'
import mainLogo from './assets/Logo-A.png'

function Navbar() {
  const Links = [
    { name: "ABOUT", link: "/" },
    { name: "PORTFOLIO", link: "/portfolio" },
    { name: "GALLERY", link: "/gallery" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <Fragment>
      <div className='flex flex-col w-full justify-center items-center'>
        <div className='flex flex-col justify-center max-w-sm h-auto mt-10'>
          <img className='h-full w-full' src={ mainLogo } alt='' />
        </div>
        <div>
          <ul className='w-full flex justify-center text-center py-0 list-none'>
          {Links.map((Link) => (
            <li key={Link.name} className='flex items-center'>
              <a href={Link.link} className='hover:text-teal-400 float-left text-black text-center px-20 py-10 no-underline text-base'>{Link.name}</a>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar;
