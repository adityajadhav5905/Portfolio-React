import React from 'react';

const Navbar = ({ activePage, onPageChange }) => {
    const pages = ['About', 'Resume', 'Portfolio', 'Contact'];

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {pages.map(page => (
                    <li className="navbar-item" key={page}>
                        <button
                            className={`navbar-link ${activePage.toLowerCase() === page.toLowerCase() ? 'active' : ''}`}
                            onClick={() => onPageChange(page)}
                            data-nav-link
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;