import React, { useCallback } from 'react';
import './style.css';
import { SearchBar } from '../../components/SearchBar';
import { SortBy } from '../../components/SortBy';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../components/SearchBar/action';
import { selectCurrentSortingOption, selectSearchTerm } from '../MoviesList/selector';
import { setSelectedSortingOption } from '../../components/SortBy/action';

export const Toolbar = React.memo(() => {
  const dispatch = useDispatch();

  const selectedOption = useSelector(selectCurrentSortingOption);
  const searchTerm = useSelector(selectSearchTerm);

  const onTermChange = useCallback(
    (term) => {
      dispatch(setSearchTerm(term));
    },
    [searchTerm]
  );

  const onOptionChange = useCallback(
    (option) => {
      dispatch(setSelectedSortingOption(option));
    },
    [selectedOption]
  );

  return (
    <div className="toolbarContainer" data-testid="sort-and-search-toolbar">
      <SortBy selectedOption={selectedOption} onSortingOptionChange={onOptionChange} />
      <SearchBar searchTerm={searchTerm} onSearchTermChange={onTermChange} />
    </div>
  );
});
