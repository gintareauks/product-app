import React from 'react';
import NavLinks from './NavLinks';

const DesktopNavigation = () => {
    return (
        <nav className="desktop-nav">
            <h2 id="logo">Logo</h2>
            <NavLinks />
        </nav>
    );
}

export default DesktopNavigation;