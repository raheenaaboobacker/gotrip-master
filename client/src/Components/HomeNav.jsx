import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

function HomeNav() {
  return (
    <header>
    
   <div className="header-area">
        <div className="main-header ">
            <div className="header-top top-bg d-none d-lg-block">
               <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-8">
                        <div className="header-info-left">
                            <ul>                          
                                <li>gotrip@gotrip.com</li>
                                <li>666 569 025077</li>
                                <li>broklyn street new york</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="header-info-right f-right">
                            <ul className="header-social">    
                                <li><a href="javascript:void(0)"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a></li>
                               <li> <a href="javascript:void(0)"><i className="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                   </div>
               </div>
            </div>
           <div className="header-bottom  header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                       
                        <div className="col-xl-2 col-lg-2 col-md-1">
                            <div className="logo">
                              <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10">
                           
                            <div className="main-menu f-right d-none d-lg-block">
                                <nav>               
                                    <ul id="navigation">                                                                                                                                     
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/#aboutus">About US</a></li>
                                        <li><a href="/#places">Package</a></li>
                                        <li><a href="/#resorts">Resort</a></li>
                                        <li><a href="/login">Sign In</a>
                                        </li>
                                        <li><a>Sign up</a>
                                            <ul className="submenu">
                                                <li><a href="/register">User</a></li>
                                                <li><a href="/coordinatorRegister">Coordinator</a></li>
                                                <li><a href="/resortRegister">Resort</a></li>                                            </ul>
                                        </li>
                                        </ul>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
   </div>
  
</header>
        

 )
}

export default HomeNav