import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/games">All Games</Link>
        </li>
        <li>
          <Link to="/games/new">Add New Game</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;