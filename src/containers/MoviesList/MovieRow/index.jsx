import React, { useMemo } from 'react';
import { arePropsSameBy } from '../../../shared/util';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovieInFocus } from '../selector';
import { setSelectedMovie } from '../actions';
import { EpisodeCell, ReleaseDateCell, TitleCell } from './MovieCells';

export const MovieRow = React.memo((movie) => {
  const { episode_id, release_date, titleWithEpisode } = movie;

  const dispatch = useDispatch();

  const selectedMovie = useSelector(selectMovieInFocus);

  const handleMovieSelection = (movie) => {
    dispatch(setSelectedMovie(movie));
  };

  const rowClasses = useMemo(
    () => getMovieRowClasses(selectedMovie?.episode_id, episode_id),
    [selectedMovie, episode_id]
  );

  return (
    <div data-testid="movie-row" className={rowClasses} onClick={() => handleMovieSelection(movie)}>
      <EpisodeCell episode_id={episode_id} />
      <TitleCell titleWithEpisode={titleWithEpisode} />
      <ReleaseDateCell release_date={release_date} />
    </div>
  );
}, arePropsSameBy('episode_id'));

function getMovieRowClasses(selectedMovieEpId, currentMovieEpId) {
  const classes = 'movieRow';
  if (selectedMovieEpId && currentMovieEpId && selectedMovieEpId === currentMovieEpId) {
    return classes.concat(' selectedMovie');
  }
  return classes;
}
