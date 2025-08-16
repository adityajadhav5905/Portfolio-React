import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css'; 

function App() {
  const [activePage, setActivePage] = useState('About');

  const renderPage = () => {
    switch (activePage) {
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'About':
      default:
        return <About />;
    }
  };

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} onPageChange={setActivePage} />
        {renderPage()}
      </div>
    </main>
  );
}

export default App;
