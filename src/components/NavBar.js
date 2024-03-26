import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">בית</Link>
      <Link to="/items">דגלים</Link>
      <Link to="/about">אודות</Link>
    </nav>
  );
}

export default NavBar;

