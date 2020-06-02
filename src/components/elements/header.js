import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <header>
      <h1>Get API</h1>
      <ul>
        <li><Link to="/news">NEWS</Link></li>
        <li><Link to="/gourmet">GOURNAVI</Link></li>
      </ul>
      <footer>Copyright 2020 API</footer>
    </header>
  );
}

export default header;
