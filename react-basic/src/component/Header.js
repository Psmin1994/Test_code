import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <NavLink to="/">토익 영단어</NavLink>
      </h1>
      <div className="menu">
        <NavLink to="/" className="link">
          단어추가
        </NavLink>
        <NavLink to="/" className="link">
          Day 추가
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
