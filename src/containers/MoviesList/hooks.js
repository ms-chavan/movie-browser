import { useDispatch, useSelector } from 'react-redux';
import { selectShouldFetchMovies } from './selector';
import { useCallback, useEffect, useRef } from 'react';
import { fetchMoviesRequest } from './actions';
import { compareAscending, compareDescending } from '../../shared/util';
import { SORTING_TYPES } from '../../components/SortBy/constants';

export const useFetchMovies = () => {
  const dispatch = useDispatch();
  let shouldFetchMovies = useSelector(selectShouldFetchMovies);

  let shouldFetchMoviesRef = useRef(shouldFetchMovies);

  useEffect(() => {
    if (shouldFetchMoviesRef.current) {
      dispatch(fetchMoviesRequest());
      shouldFetchMoviesRef.current = false;
    }
  }, [shouldFetchMovies]);
};

export const useSortMovies = (movies, selectedSortingOption, setProcessedMovies) => {
  const sortedMovies = useCallback(() => [...movies], [])();

  useEffect(() => {
    const compareFunction =
      selectedSortingOption.type === SORTING_TYPES.ASC ? compareAscending : compareDescending;

    if (selectedSortingOption.name === 'Episode') {
      sortedMovies.sort((prevMovie, nextMovie) =>
        compareFunction(prevMovie.episode_id, nextMovie.episode_id)
      );
    } else {
      sortedMovies.sort((prevMovie, nextMovie) =>
        compareFunction(prevMovie.release_date, nextMovie.release_date, true)
      );
    }

    setProcessedMovies(sortedMovies);
  }, [movies, selectedSortingOption]);
};

export const useFilterMovies = (movies, searchTerm, setProcessedMovies) => {
  useEffect(() => {
    const filteredMovies = movies?.filter((movie) => {
      const movieTitle = movie.titleWithEpisode;

      return movieTitle.toUpperCase().includes(searchTerm.trim().toUpperCase());
    });

    setProcessedMovies(filteredMovies);
  }, [movies, searchTerm, setProcessedMovies]);
};
