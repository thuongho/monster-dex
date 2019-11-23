import React from 'react';
import './search-box.styles.css';

// function component
// no access to internal state
// no access to lifecycle methods
// we just want to render some html

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
