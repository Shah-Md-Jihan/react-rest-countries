import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to my rest country website!!!</h1>
            <nav className='nav'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">About</a>
            </nav>
        </div>
    );
};

export default Header;