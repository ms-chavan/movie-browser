import { useSelector } from 'react-redux';
import './style.css';
import { selectMovieInFocus } from '../MoviesList/selector';
import { NoResultFound } from '../../components/NoResultFound';

export const MovieDetails = () => {
  const selectedMovie = useSelector(selectMovieInFocus);
  return (
    <div className="rightPanel" data-testid="right-panel">
      {selectedMovie ? (
        <div>
          <span className="title">{selectedMovie.titleWithEpisode}</span>
          <p>{selectedMovie.opening_crawl}</p>
          <p> Directed by: {selectedMovie.director}</p>
        </div>
      ) : (
        <NoResultFound message="No movie selected" />
      )}
    </div>
  );
};
