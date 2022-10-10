import { useState } from "react"
import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/Navbar"
import {FaAlignLeft, FaUserCircle, FaCaretDown} from "react-icons/fa"
import Logo from "./Logo"
import { useAppContext } from "../context/appContext"

const Nav = () => {
  const [showLogout, setShowLogout] = useState(false)

  // calls toggleSidebar from AppContext.js
  const {toggleSidebar, logoutUser} = useAppContext()

  return (
        <Wrapper>
            <div className = "nav-center">
              <button 
                className="toggle-btn"
                onClick = {toggleSidebar}
              >
                <FaAlignLeft />  
              </button>

              <div>
                <Logo />
                <h3 className = "logo-text">dashboard</h3>
              </div>

              <div className = "btn-container">
                <button 
                  className="btn"
                  onClick = {() => setShowLogout(!showLogout)}
                >
                  <FaUserCircle />
                  atka
                  <FaCaretDown />
                </button>
                <div className = "dropdown show-dropdown">
                  <button 
                    onClick = {() => logoutUser()}
                    className = "dropdown-btn"
                  >
                    logout
                  </button>
                </div>
              </div>
            </div>      
        </Wrapper>
  )
}






export default Nav