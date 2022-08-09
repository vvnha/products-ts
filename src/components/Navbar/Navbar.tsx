import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.scss';

function Navbar() {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul className="nav__list-desktop">
        <li className="nav__list-item">
          <a href="/" onClick={toggleNavList} className="link link--nav">
            Products
          </a>
        </li>

        <li className="nav__list-item">
          <a href="/add" onClick={toggleNavList} className="link link--nav">
            Create Product
          </a>
        </li>
      </ul>

      <ul style={{ display: showNavList ? 'flex' : 'none' }} className="nav__list">
        <li className="nav__list-item">
          <a href="/" onClick={toggleNavList} className="link link--nav">
            Products
          </a>
        </li>

        <li className="nav__list-item">
          <a href="/add" onClick={toggleNavList} className="link link--nav">
            Create Product
          </a>
        </li>
      </ul>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
}

export default Navbar;
