import { createSelector } from 'reselect';

export const selectMovies = (state) => state.movies?.data;

export const selectMoviesLoading = (state) => state.movies?.loading;

export const selectShouldFetchMovies = createSelector(
  selectMovies,
  selectMoviesLoading,
  (movies, loading) => {
    return (!movies || movies?.length === 0) && !loading;
  }
);

export const selectCurrentSortingOption = (state) => state.sortBy.selectedOption;

export const selectSearchTerm = (state) => state.search.term;

export const selectMovieInFocus = (state) => state.movies.selectedMovie;
