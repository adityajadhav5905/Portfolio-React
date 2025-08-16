import React, { useState } from 'react';
import { IoMailOutline, IoPhonePortraitOutline, IoChevronDown, IoDownloadOutline } from 'react-icons/io5';

// Import the avatar image directly from assets
import avatarImg from '../assets/avatar-1.jpg';

// Social Icon Components (no change here)
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 98 96">
    <path fill="currentColor" d="M49 .5C21.9.5-.1 22.4-.1 49.5c0 21.7 14 40.1 33.5 46.6c2.5.5 3.4-1.1 3.4-2.4c0-1.2-.1-5.2-.1-9.4 c-13.6 3-16.4-5.8-16.4-5.8c-2.2-5.6-5.4-7.1-5.4-7.1c-4.4-3 .3-3 .3-3c4.8.3 7.4 5 7.4 5 c4.3 7.4 11.3 5.3 14.1 4c.4-3.1 1.7-5.3 3-6.5 c-10.8-1.2-22.1-5.4-22.1-24.2c0-5.4 1.9-9.8 5-13.2 c-.5-1.2-2.2-6 .5-12.5c0 0 4.1-1.3 13.5 5 c3.9-1.1 8.1-1.7 12.3-1.7s8.4.6 12.3 1.7 c9.3-6.3 13.5-5 13.5-5c2.7 6.5 1 11.3.5 12.5 c3.1 3.4 5 7.8 5 13.2c0 18.9-11.3 23-22.1 24.2 c1.8 1.5 3.4 4.4 3.4 8.8c0 6.3-.1 11.4-.1 12.9 c0 1.3.9 2.9 3.4 2.4c19.5-6.5 33.5-24.9 33.5-46.6 C98.1 22.4 76.1.5 49 .5z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512">
    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zm-46.44-339.5C24.9 108.5 0 83.6 0 53.3 0 23 24.9-2 54.3-2c29.4 0 54.3 25 54.3 55.3 0 30.3-24.9 55.2-54.3 55.2zM447.9 448h-92.4V306.4c0-33.7-.7-77-47-77-47 0-54.2 36.8-54.2 74.9V448H161.8V148.9h88.7v40.8h1.3c12.4-23.6 42.7-48.5 87.9-48.5 94 0 111.3 61.9 111.3 142.3V448z" />
  </svg>
);


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          {/* Use the corrected import path */}
          <img src={avatarImg} alt="Aditya Jadhav" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Aditya Jadhav">Aditya Jadhav</h1>
        </div>
        <button className="info_more-btn" onClick={() => setIsOpen(!isOpen)} data-sidebar-btn>
          <span>Show Contacts</span>
          <IoChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box"><IoMailOutline /></div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:adityajadhav5905@gmail.com" className="contact-link">adityajadhav5905@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><IoPhonePortraitOutline /></div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+91886246490" className="contact-link">+91 886246490</a>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        {/* The resume must be in the public folder to be downloadable this way */}
        <a href="/resume.pdf" download className="form-btn">
          <IoDownloadOutline />
          <span>Download Resume (PDF)</span>
        </a>
        <ul className="social-list">
          <li className="social-item"><a href="https://github.com/adityajadhav5905" target="_blank" rel="noopener noreferrer" className="social-link"><GitHubIcon /></a></li>
          <li className="social-item"><a href="https://www.linkedin.com/in/adityajadhav5905/" target="_blank" rel="noopener noreferrer" className="social-link"><LinkedInIcon /></a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;