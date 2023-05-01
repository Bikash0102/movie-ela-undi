import React, { useContext } from 'react'
import './header1.css'; 
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Appstate } from '../App';


const Header1 = () => {
    const useAppstate = useContext(Appstate);
    const navItem=useRef();
    const  vaf = ()=>
    {
       
        navItem.current.classList.toggle('active');
    }
    

  return (
    <>
    
    <navbar class="navbar-container">
        <div class="logo-container">
        <Link to={'/'}>  <a href="#" id="brand">Movie..Ela..undi<spam class="brand2">?</spam></a></Link>
        </div>

        <div class="bars" onClick={vaf}>
            <div class="bar" ></div>
            <div class="bar" ></div>
            <div class="bar" ></div>
        </div>

        <ul ref={navItem}class="nav-items">
            <Link to={'/'}><li class="nav-link"><a href="#">Telugu</a></li></Link>
            <li class="nav-link"><a href="#">Hindi</a></li>
            <li class="nav-link"><a href="#">Rate this project</a></li>
           
            <div class="login-register">
                {useAppstate.login ?
                        <>
                        <Link to={'/addmovie'}><a href="#" class="button">Addmovie</a></Link></>
                    :
                    <><Link to={'/login'}><a href="#" class="button">Login</a></Link>
                    <Link to={'/signup'}><a href="#" class="button">Register</a></Link>
                    </>
                }
                  
            </div>
            
        </ul>
    </navbar>
    
    
</>
  )
}

export default Header1