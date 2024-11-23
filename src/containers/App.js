import './App.css';
import React from 'react';
import { Toolbar } from './Toolbar';
import { MovieBrowserLayout } from './Layout';
import { MovieList } from './MoviesList';
import { MovieDetails } from './MovieDetails';
import { useSelector } from 'react-redux';
import { selectMoviesLoading } from './MoviesList/selector';
import { Processing } from '../components/Processing';

function App() {
  const moviesLoading = useSelector(selectMoviesLoading);
  return (
    <div className="appContainer">
      <Processing isLoading={moviesLoading}>
        <MovieBrowserLayout Toolbar={Toolbar} LeftPanel={MovieList} RightPanel={MovieDetails} />
      </Processing>
    </div>
  );
}

export default App;
