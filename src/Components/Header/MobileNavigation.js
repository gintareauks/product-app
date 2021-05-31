import React from 'react';
import {useState} from 'react';
import {BiMenu} from 'react-icons/bi';
import {CgClose} from 'react-icons/cg';
import NavLinks from './NavLinks';


const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <BiMenu className="burger" size="40px" color="#737373" onClick={() => setOpen(!open)} />

    const closeIcon = <CgClose className="close-burger" size="40px" color="#737373" onClick={() => setOpen(!open)} />

    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className="mobile-nav">
            <h2 id="logo">logo</h2>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    )
}

export default MobileNavigation;

