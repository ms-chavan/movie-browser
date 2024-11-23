import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchMovies, useFilterMovies, useSortMovies } from './hooks';
import './style.css';
import { selectCurrentSortingOption, selectMovies, selectSearchTerm } from './selector';
import { MovieRow } from './MovieRow';
import { setSelectedMovie } from './actions';
import { NoResultFound } from '../../components/NoResultFound';

export const MovieList = () => {
  const dispatch = useDispatch();
  useFetchMovies();

  const movies = useSelector(selectMovies);
  const selectedSortingOption = useSelector(selectCurrentSortingOption);
  const searchTerm = useSelector(selectSearchTerm);

  const [sortedMovies, setSortedMovies] = useState([]);
  const [processedMovies, setProcessedMovies] = useState(movies);

  useSortMovies(movies, selectedSortingOption, setSortedMovies);
  useFilterMovies(sortedMovies, searchTerm, setProcessedMovies);

  const handleMovieSelection = (episode_id) => {
    const selectedMovie = movies.find((movie) => movie.episode_id === episode_id);
    dispatch(setSelectedMovie(selectedMovie));
  };

  const isEmptyResult = !processedMovies || processedMovies.length === 0;

  return (
    <div className="leftPanel" data-testid="left-panel">
      {processedMovies.map((movie) => (
        <MovieRow key={movie.episode_id} {...movie} handleMovieSelection={handleMovieSelection} />
      ))}
      {isEmptyResult && <NoResultFound message={`No results found for "${searchTerm}"`} />}
    </div>
  );
};
