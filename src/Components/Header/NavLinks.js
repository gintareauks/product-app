import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = (props) => {
    return(
        <ul className="nav-links">
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/">home</Link>
            </li>

            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/shop">shop</Link>
            </li>

            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/reviews">reviews</Link>
            </li>

            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/blog">blog</Link>
            </li>
        </ul>
    )
}

export default NavLinks