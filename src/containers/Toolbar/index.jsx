import React from 'react';
import './style.css';
import { SearchBar } from '../../components/SearchBar';
import { SortBy } from '../../components/SortBy';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../components/SearchBar/action';
import { selectCurrentSortingOption } from '../MoviesList/selector';
import { setSelectedSortingOption } from '../../components/SortBy/action';

export const Toolbar = () => {
  const dispatch = useDispatch();

  const selectedOption = useSelector(selectCurrentSortingOption);

  const onTermChange = (term) => {
    dispatch(setSearchTerm(term));
  };

  const onOptionChange = (option) => {
    dispatch(setSelectedSortingOption(option));
  };

  return (
    <div className="toolbarContainer" data-testid="sort-and-search-toolbar">
      <SortBy selectedOption={selectedOption} onSortingOptionChange={onOptionChange} />
      <SearchBar onSearchTermChange={onTermChange} />
    </div>
  );
};
