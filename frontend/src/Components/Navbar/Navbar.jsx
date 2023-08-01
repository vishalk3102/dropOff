import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = ({ isAuthenticated = false }) => {
  const [nav, setNav] = useState(false)
  const menuRef = useRef()

  useEffect(() => {
    let menuHandler = e => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false)
      }
      document.addEventListener('mousedown', menuHandler)
      return () => {
        document.removeEventListener('mousedown', menuHandler)
      }
    }
  })

  const handleMenuClick = () => {
    setNav(!nav)
  }
  const handleNavItemClick = () => {
    setNav(false)
  }
  return (
    <>
      <section
        id='Navbar'
        className='h-20 w-[100%] flex  mx-auto border-solid border-2 border-black bg-black text-white'
      >
        {/* *****************DESKTOP NAVBAR CODE *************** */}
        <div className='hidden  md:flex w-[100%]  max-w-[1200px] justify-between  items-center mx-auto'>
          <div className='text-[1.8rem] font-bold   p-2  m-2'>
            <Link to='/' className='hover:cursor-pointer'>
              <h5 className='bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] text-transparent bg-clip-text'>
                DropOff
              </h5>
            </Link>
          </div>
          <ul className='flex justify-evenly'>
            <li className='text-[1rem] font-medium  capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
              <Link to='/'>Home</Link>
            </li>
            <li className='text-[1rem] font-medium capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
              <Link to='/about'>About</Link>
            </li>
            <li className='text-[1rem] font-medium capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
              <Link to='/services'>Services</Link>
            </li>
            <li className='text-[1rem] font-medium capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
              <Link to='/ship'>Ship</Link>
            </li>
            <li className='text-[1rem] font-medium capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
              <Link to='/track'>Track</Link>
            </li>
            <li className='text-[1rem] font-medium capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='text-[1rem] font-medium  capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
            <Link
              to={isAuthenticated ? '/me' : '/login'}
              className='flex items-center'
            >
              {isAuthenticated ? <FaUser size={28} /> : <FiLogIn size={28} />}
            </Link>
          </div>
        </div>
        <div
          className='w-[100%] max-w-[1200px] md:hidden flex justify-between mx-auto'
          onClick={handleMenuClick}
        >
          <div className='text-[1.8rem] font-bold   p-2  m-2'>
            <Link to='www' className='hover:cursor-pointer'>
              <h5 className='bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] text-transparent bg-clip-text'>
                DropOff
              </h5>
            </Link>
          </div>
          <div className='flex justify-center items-center p-2 m-5 hover:cursor-pointer'>
            {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </div>
        </div>

        {/* *****************MOBILE NAVBAR CODE *************** */}
        <div
          ref={menuRef}
          className={
            !nav
              ? 'fixed left-[-100%]'
              : 'fixed left-0 top-0 w-[60%] h-full bg-black text-[#fff] ease-in-out duration-500 z-20'
          }
        >
          <div className='flex flex-col justify-center items-center my-10'>
            <div className='text-[1.8rem] font-bold    p-2  m-2'>
              <Link
                to='www'
                className='hover:cursor-pointer'
                onClick={handleNavItemClick}
              >
                <h5 className='bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] text-transparent bg-clip-text'>
                  DropOff
                </h5>
              </Link>
            </div>
            <ul className='flex flex-col justify-center items-center mt-10'>
              <li className='text-[1rem] font-medium  capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
                <Link to='/' onClick={handleNavItemClick}>
                  Home
                </Link>
              </li>
              <li className='text-[1rem] font-medium capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
                <NavLink to='/about' onClick={handleNavItemClick}>
                  About
                </NavLink>
              </li>
              <li className='text-[1rem] font-medium capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
                <Link to='/services' onClick={handleNavItemClick}>
                  Services
                </Link>
              </li>
              <li className='text-[1rem] font-medium capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
                <Link to='/ship' onClick={handleNavItemClick}>
                  Ship
                </Link>
              </li>
              <li className='text-[1rem] font-medium capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
                <Link to='/track' onClick={handleNavItemClick}>
                  Track
                </Link>
              </li>
              <li className='text-[1rem] font-medium capitalize flex justify-center items-center p-2 m-2 hover:cursor-pointer'>
                <Link to='/contact' onClick={handleNavItemClick}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className='text-[1rem] font-medium  capitalize flex justify-center items-center p-2 m-2 mt-10 hover:cursor-pointer'>
              <Link
                to={isAuthenticated ? '/me' : '/login'}
                className='flex items-center'
              >
                {isAuthenticated ? <FaUser size={28} /> : <FiLogIn size={28} />}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
