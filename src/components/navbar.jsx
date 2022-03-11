import React from 'react'
import { Link } from 'react-scroll/modules'
import menuItems from './navbar.data'

const Navbar = () => {
  return (
    <nav className='header__navbar 
    fixed text-center flex items-center px-3 bottom-8 w-max bg-white left-1/2 -translate-x-1/2 z-10 drop-shadow-lg
    lg:relative lg:flex lg:justify-between lg:w-full lg:left-zero lg:bg-inherit lg:py-5 lg:text-white lg:bottom-0  lg:translate-x-zero
    xl:px-36
    '>
      <div className='font-semibold text-xl hidden lg:inline-block'>
        <Link
          to='home'
          smooth={true}
          duration={200}
          offset={0}
          className='text-white cursor-pointer'
        >
          <span>RTH</span></Link>
      </div>
      <div className='flex gap-5 p-2'>
        {
          menuItems.map((menuItem, i) => (
            <Link
              activeClass='active'
              to={menuItem.path}
              spy={true}
              smooth={true}
              duration={200}
              offset={0}
              key={i}
              className='py-2 px-2 hover:cursor-pointer flex tracking-2 hover:text-purple-500 duration-300 ease-in-out'
              aria-label={menuItem.label}
            >
              <span className='hidden lg:inline-block text-xs'>{menuItem.label}</span>
              <span className='inline-block lg:hidden text-2xl'>{menuItem.icon}</span>
            </Link>
          ))
        }
      </div>
    </nav >
  )
}

export default Navbar