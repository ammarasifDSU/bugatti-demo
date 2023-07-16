import React, { useState } from 'react'
import "../../Assets/Styles/menu/menu.css"

const Menu = () => {

    const [isHovered, setIsHovered] = useState("");

    const handleMouseEnter = (e) => {
        setIsHovered(e.target.innerText);
      };
    
      const handleMouseLeave = (e) => {
        setIsHovered("");
      };


  return (
    <>
        <div className='menu'>
            <div className='menu-item'>
            <h2 style={{cursor:"pointer"}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>MODELS</h2>
        {isHovered == "MODELS"?
            <div className="submenu">
            <label>CHIRON</label>
            <label>W16  MISTRAL</label>
            <label>ONE OFF</label>
            <label>CONCEPT CAR</label>
            <label>VEYRON</label>
            </div>
            :""}
            </div>
            <div className='menu-item'>
            <h2 style={{cursor:"pointer"}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>BRANDS</h2>
        {isHovered == "BRANDS"?
            <div className="submenu">
            <label>HISTORY</label>
            <label>HISTORIC MODELS</label>
            <label>MOLSHEIM</label>
            </div>
            :""}
            </div>
            <div className='menu-item'>
            <h2 style={{cursor:"pointer"}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>OWNERSHIP</h2>
         {isHovered == "OWNERSHIP"?
            <div className="submenu">
            <label>CUSTOMER SERVICE</label>
            <label>ACCESSORIES</label>
            <label>SUR MESURE</label>
            </div>
            :""}
            </div>
            <div className='menu-item'>
            <h2 style={{cursor:"pointer"}}>LIFESTYLE</h2>
            </div>
            <div className='menu-item'>
            <h2 style={{cursor:"pointer"}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>COMPANY</h2>
         {isHovered == "COMPANY"?
            <div className="submenu">
            <label>CAREER</label>
            <label>ETHICS AND CULTURE</label>
            <label>CONTACT</label>
            <label>NEWS</label>
            </div>
            :""}
            </div>
        </div>
    </>
  )
}

export default Menu
