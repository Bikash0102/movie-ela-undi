
import './header2.css'; 
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Appstate } from '../App';
import React, { useContext } from 'react'


function Header3() {
  const useAppstate = useContext(Appstate);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
        <div class="logo-container">
          <NavLink exact to="/" id="brand">Movie..Ela..undi<spam class="brand2">?</spam>
          </NavLink>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/telugu"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                TELUGU
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                HINDI
              </NavLink>
            </li>
            
            <div class="login-register">
                {useAppstate.login ?
                        <>
                        <Link onClick={handleClick} to={'/addmovie'}><a href="#"  class="button">Addmovie</a></Link></>
                    :
                    <><Link onClick={handleClick}  to={'/login'}><a href="#" class="button">Login</a></Link>
                    <Link onClick={handleClick} to={'/signup'}><a href="#" class="button">Register</a></Link>
                    </>
                }
                  
            </div>
                 
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header3;