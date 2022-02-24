import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Movie from './Movie';
import WatchListItem from './WatchListItem';

export default function MoviesList({ movies, reloadWatchList, onWatchList }) {

  const location = useLocation();

  return (
    <div className='movies-list'>
      {
        movies.map((movie, i) => location.pathname.includes('search')
          ? <Movie
            key={movie.title + i}
            movie={movie}
            onWatchList={onWatchList}
            reloadWatchList={reloadWatchList} />
          : <WatchListItem
            key={movie.title + i}
            
            reloadWatchList={reloadWatchList}
            movie={movie} />)
      }
    </div>
  );
}