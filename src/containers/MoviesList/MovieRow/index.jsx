import React from 'react';
import { arePropsSameBy } from '../../../shared/util';
import './style.css';
import { useSelector } from 'react-redux';
import { selectMovieInFocus } from '../selector';

export const MovieRow = React.memo(
  ({ episode_id, release_date, titleWithEpisode, handleMovieSelection }) => {
    const selectedMovie = useSelector(selectMovieInFocus);

    return (
      <div
        data-testid="movie-row"
        className={getMovieRowClasses(selectedMovie?.episode_id, episode_id)}
        onClick={() => handleMovieSelection(episode_id)}>
        <div className="episodeCell">EPISODE {episode_id}</div>
        <div className="titleCell">{titleWithEpisode}</div>
        <div className="releaseDateCell">{release_date}</div>
      </div>
    );
  },
  arePropsSameBy('episode_id')
);

function getMovieRowClasses(selectedMovieEpId, currentMovieEpId) {
  const classes = 'movieRow';
  if (selectedMovieEpId && currentMovieEpId && selectedMovieEpId === currentMovieEpId) {
    return classes.concat(' selectedMovie');
  }
  return classes;
}
