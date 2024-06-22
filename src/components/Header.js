import React from 'react';

const Header = ({ setQuery }) => {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header>
      <h1 className="header-title">NewsApp</h1>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search articles..."
      />
    </header>
  );
};

export default Header;
