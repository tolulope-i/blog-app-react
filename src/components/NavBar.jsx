import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className='navbar'>
                <div className="wrapper">
                    <div className="mobile-nav">
                        <div className="blog-name">
                            <h1>blogazine</h1>
                        </div>
                        <div className={`hamburger ${isOpen ? 'times' : ''}`} onClick={toggleMenu}>
                            <div className="hamburger-line"></div>
                            <div className="hamburger-line"></div>
                            <div className="hamburger-line"></div>
                        </div>
                    </div>
                    <ul className={`blog-links ${isOpen ? 'show-blog-links' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/signin">Create Post</Link></li>
                        <div className="sign-btns">
                            <Link to="/signin">Sign In</Link> 
                            <span>/</span>
                            <Link to="/signup">Sign Up</Link> 
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
