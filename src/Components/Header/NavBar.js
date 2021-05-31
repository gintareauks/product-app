import React from 'react'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'


const NavBar = () => {
    return (
        <div class="nav-bar">
            <MobileNavigation />
            <DesktopNavigation />
        </div>
    )
}

export default NavBar