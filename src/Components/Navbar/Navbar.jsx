import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '/src/assets/logo.png';
import search_icon from '/src/assets/search_icon.svg';
import bell_icon from '/src/assets/bell_icon.svg';
import profile_img from '/src/assets/profile_img.png';
import caret_icon from '/src/assets/caret_icon.svg';
import { logout } from '../Firebase';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navRef = useRef();
    const navigate = useNavigate(); // Use navigate for redirection

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add("nav-dark");
            } else {
                navRef.current.classList.remove("nav-dark");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        logout(navigate); // Pass navigate to the logout function
    };

    return (
        <div ref={navRef} className='navbar'>
            <div className="navbar-left">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse By Languages</li>
                </ul>
            </div>

            <div className="navbar-right">
                <img src={search_icon} alt="Search" className='icons' />
                <p>Children</p>
                <img src={bell_icon} alt="Notifications" className='icons' />
                <div className="navbar_profile" onClick={handleDropdownToggle} tabIndex="0">
                    <img src={profile_img} alt="Profile" className='profile' />
                    <img src={caret_icon} alt="Caret" className='caret' />
                    {isDropdownOpen && (
                        <div className="dropdown">
                            <p onClick={handleLogout}>Sign Out</p> {/* Call handleLogout */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
