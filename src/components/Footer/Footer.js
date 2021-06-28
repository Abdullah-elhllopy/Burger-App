/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import LogoBlock from '../../images/Logo-black.png'
import Location from '../../images/location.png'
import Email from '../../images/email.png'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="logo">
                            <img src={LogoBlock} alt="" />
                        </div>
                        <div className="pera">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis.</p>	
                        </div>
                        <div className="copyright">
                            <p>© Company Name 2020. All rights reserved.</p>
                        </div>
                      </div>  
                        <div className="footer-right">
                            <div className="address">
                                <div className="address-loc">
                                    <img src={Location}alt="" />
                                    <p>Main Road, Building Name, Country</p>
                                </div>
                                <div className="address-mail">
                                    <img src={Email} alt="" />
                                    <p>info@companyname.com</p>
                                </div>
                            </div>


                            <div className="socialicon">
                                <ul>
                                    <li><a href="!" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>						
                                    <li><a href="!" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>

                                    <li><a href="!" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>

                                    <li><a href="!" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"></i></a> </li>
                                    </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    
    )
}
