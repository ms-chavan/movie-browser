import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchMovies, useFilterAndSortMovies } from './hooks';
import './style.css';
import { selectCurrentSortingOption, selectMovies, selectSearchTerm } from './selector';
import { MovieRow } from './MovieRow';
import { NoResultFound } from '../../components/NoResultFound';

export const MovieList = () => {
  useFetchMovies();

  const movies = useSelector(selectMovies);
  const selectedSortingOption = useSelector(selectCurrentSortingOption);
  const searchTerm = useSelector(selectSearchTerm);

  const processedMovies = useFilterAndSortMovies(movies, searchTerm, selectedSortingOption);

  const isEmptyResult = !processedMovies || processedMovies.length === 0;

  return (
    <div className="leftPanel" data-testid="left-panel">
      {processedMovies.map((movie) => (
        <MovieRow key={movie.episode_id} {...movie} />
      ))}
      {isEmptyResult && <NoResultFound message={`No results found for "${searchTerm}"`} />}
    </div>
  );
};
