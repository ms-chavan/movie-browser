import { useDispatch, useSelector } from 'react-redux';
import { selectShouldFetchMovies } from './selector';
import { useEffect, useMemo, useRef } from 'react';
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
  }, [shouldFetchMovies, dispatch]);
};

export const useFilterAndSortMovies = (movies, searchTerm, selectedSortingOption) => {
  const filteredAndSortedMovies = useMemo(() => {
    const filteredMovies = movies?.filter((movie) =>
      movie.titleWithEpisode.toUpperCase().includes(searchTerm.trim().toUpperCase())
    );

    const sortedMovies = sortMovies([...filteredMovies], selectedSortingOption);

    return sortedMovies;
  }, [movies, searchTerm, selectedSortingOption]);

  return filteredAndSortedMovies;
};

function sortMovies(movies, sortingOption) {
  const compareFunction =
    sortingOption.type === SORTING_TYPES.ASC ? compareAscending : compareDescending;

  if (sortingOption.name === 'Episode') {
    movies.sort((prevMovie, nextMovie) =>
      compareFunction(prevMovie.episode_id, nextMovie.episode_id)
    );
  } else {
    movies.sort((prevMovie, nextMovie) =>
      compareFunction(prevMovie.release_date, nextMovie.release_date, true)
    );
  }

  return movies;
}
