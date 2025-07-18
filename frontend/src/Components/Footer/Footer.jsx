import React from 'react'
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="footer logo" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li className="">Company</li>
            <li className="">Products</li>
            <li className="">offices</li>
            <li className="">About</li>
            <li className="">Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="instagram icon" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="pintester  icon" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="whatsapp icon" /> 
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025 - All Right Reserved</p>
            <p>© 2025 Shopper. All rights reserved.</p>
        </div>
    </div>
  )
}
