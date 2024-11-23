import { useState } from 'react';
import './style.css';

export const SearchBar = ({ onSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    const newTerm = event.target.value;
    setSearchTerm(newTerm);

    onSearchTermChange(newTerm);
  };

  return (
    <input
      type="search"
      name="movies-search"
      onChange={handleSearchTermChange}
      value={searchTerm}
      placeholder="Type to search..."
      className="inputStyle"
    />
  );
};
