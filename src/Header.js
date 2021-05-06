import React from 'react';
import './Header.css';
import HeaderTop from './HeaderTop';
import HeaderBotton from './HeaderBotton';


function Header() {
    return (
        <div className="header">
            <HeaderTop />
            <HeaderBotton />
        </div>
    )
}

export default Header

