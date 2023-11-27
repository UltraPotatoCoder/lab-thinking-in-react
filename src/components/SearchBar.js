import React from 'react';

function SearchBar(onChange) {
  return (
    <div>
      <label htmlFor="search">Search product: </label>
      <input
        type="text"
        id="search"
        placeholder="Type to search..."
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
