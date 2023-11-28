import React from 'react';

function SearchBar({ onChange, onInStockChange, inStockOnly }) {
  return (
    <div>
      <label htmlFor="search">Search product: </label>
      <input
        type="text"
        id="search"
        placeholder="Type to search..."
        onChange={onChange}
      />

      <label htmlFor="inStock">In Stock Only:</label>
      <input
        type="checkbox"
        id="inStock"
        checked={inStockOnly}
        onChange={onInStockChange}
      />
    </div>
  );
}

export default SearchBar;
