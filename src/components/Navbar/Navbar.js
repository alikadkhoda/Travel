import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Navbar.css'
const Navbar = () => {
    const [menuState,setMenuState]=useState(false)
    const [buttonState,setButtonState]=useState(true)

    const handleMenu=()=>{
        setMenuState(!menuState)
    }
    const closeMobileMenu=()=>{
        setMenuState(false)
    }
    const handleButton=()=>{
        if(window.innerWidth<=960)
        setButtonState(false)
        else
        setButtonState(true)
    }
    useEffect(()=>{
        handleButton()
    })
    window.addEventListener('resize', handleButton)
    return ( 
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to={'/'} className='navbar-logo'>
                    Travel <i className='fab fa-typo3'></i>
                </Link>
                <div className='menu-icon' onClick={handleMenu}>
                    <i className={menuState ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={menuState ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to={'/'} className='nav-links' onClick={closeMobileMenu}>
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/tourism'} className='nav-links' onClick={closeMobileMenu}>
                             گردشگری
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/tour'} className='nav-links' onClick={closeMobileMenu}>
                             تور
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/sign-up'} className='nav-links-mobile' onClick={closeMobileMenu}>
                             ثبت نام
                        </Link>
                    </li>
                </ul>
                {   buttonState ?
                    <Button to={'/sign-up'} buttonStyle='btn--outline'>
                       ثبت نام
                    </Button>:null
                }
            </div>
        </nav>
     );
}
 
export default Navbar;