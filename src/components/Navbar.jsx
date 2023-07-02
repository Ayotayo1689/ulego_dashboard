import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import logo from "../images/bitstock-logo2.png"
// import logo from "./logo.svg"

const Navbar = () => {
  const [openNav, setOpenNav] = useState(true)
  const openclose =()=>{
    setOpenNav(!openNav)
  }
  return (
    <div className="nav-side">
      {openNav ? <div className="navbar">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="nav">
            <Link to="/" className="navlink">Home</Link>
            <Link className="navlink">Products</Link>
            <Link to="/investment-club" className="navlink">Investment Club</Link>
            <Link to="/about-us" className="navlink">About Us</Link>
            <Link to="/faqs" className="navlink">FAQs</Link>
            <Link className="navlink">Blog</Link>
            <Link to="/Login" className="navlink">Login</Link >
            <Link to="/Login"><button className='buttons'>Sign Up</button></Link>
        </div>
        <div className="ham" onClick={openclose} >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-c57d90d04ebe9d60"><path d="M11 6L20 6" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 12H20.5" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 18H11" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path></svg>
        </div>
    </div>: <div className="absolute-nav">
    <div className="navbar">
        <div className="logo">
        <img src={logo} alt="logo"  />
        </div>
        
        <div className="" onClick={openclose}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-c57d90d04ebe9d60"><path d="M9.46585 8.01314L15.6959 1.78287C16.1014 1.37762 16.1014 0.722377 15.6959 0.317124C15.2907 -0.0881297 14.6354 -0.0881297 14.2302 0.317124L7.99992 6.54739L1.76983 0.317124C1.36439 -0.0881297 0.709336 -0.0881297 0.304083 0.317124C-0.101361 0.722377 -0.101361 1.37762 0.304083 1.78287L6.53417 8.01314L0.304083 14.2434C-0.101361 14.6487 -0.101361 15.3039 0.304083 15.7092C0.506045 15.9113 0.771595 16.0129 1.03696 16.0129C1.30232 16.0129 1.56768 15.9113 1.76983 15.7092L7.99992 9.47889L14.2302 15.7092C14.4323 15.9113 14.6977 16.0129 14.9631 16.0129C15.2284 16.0129 15.4938 15.9113 15.6959 15.7092C16.1014 15.3039 16.1014 14.6487 15.6959 14.2434L9.46585 8.01314Z" fill="currentColor" class="jsx-c57d90d04ebe9d60"></path></svg>
        </div>
    </div>
    <div className="navMenu" onClick={openclose}>
      <div className="btns">
            <Link to="/Login"><button className='buttons'>Sign Up</button></Link>
            <Link to="/Login" className="navlink">Login</Link >
      </div>
            <Link to="/" className="navlink">Home</Link>
            <Link className="navlink">Products</Link>
            <Link to="/investment-club" className="navlink">Investment Club</Link>
            <Link to="/about-us" className="navlink">About Us</Link>
            <Link to="/faqs" className="navlink">FAQs</Link>
            <Link className="navlink">Blog</Link>
            
    </div>
    </div> }
    </div>
  )
}

export default Navbar