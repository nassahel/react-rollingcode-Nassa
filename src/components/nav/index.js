import React from 'react';
import './styles.css';

export const NavBar = () => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li>Home</li>
                <li>Post</li>
                <li>Comments</li>
            </ul>
        </nav>
    )
};
