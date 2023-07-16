import React, { useState } from 'react'
import NavIcon from "../../Assets/Images/nav-icon.png"
import Logo from "../../Assets/Images/logo.png"
import LocationIcon from "../../Assets/Images/location-icon.png"
import CrossIcon from "../../Assets/Images/CrossIcon.png"
import "../../Assets/Styles/header/header.css"

const Header = ({setIsMenu}) => {

    const [menuIcon,setMenuIcon] = useState("NavIcon")

    const changeNavIcon = (e) =>{
        setMenuIcon(prevState=>{
            if(prevState=="NavIcon"){
                setIsMenu(true)
                return "CrossIcon"
            }
            else{
                setIsMenu(false)
                return "NavIcon"
            }
        })
    }
  return (
        <header class="header">
    <div class="header-left">
        <img src={menuIcon=="NavIcon"?NavIcon:CrossIcon} alt="Nav Icon" onClick={changeNavIcon} class="nav-icon"/>
    </div>
    <div class="header-center">
        <img src={Logo} alt="Logo" class="logo"/>
    </div>
    <div class="header-right">
        <span className='loc-label'>LONDON</span>
        <img src={LocationIcon} alt='Location Icon' className='loc-icon'/>
        
    </div>
    </header>
  )
}

export default Header
