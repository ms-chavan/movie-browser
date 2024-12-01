import { memo } from 'react';
import './style.css';
import { arePropsSameBy } from '../../shared/util';

export const SearchBar = memo(({ searchTerm, onSearchTermChange }) => {
  const handleSearchTermChange = (event) => {
    onSearchTermChange(event.target.value);
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
}, arePropsSameBy('searchTerm'));
