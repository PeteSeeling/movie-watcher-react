import { useEffect, useState } from 'react';
import MoviesList from './MovieList';
import { getMyWatchlist } from './fetch-utils';

export default function WatchListPage() {
 
  const [movies, setMovies] = useState([]);

  async function refreshMyWatchList(){
    const myWatchlist = await getMyWatchlist();

    setMovies(myWatchlist);
  }
  useEffect(() => {
    refreshMyWatchList();

  }, []);

  return (
    <div>
      <h2>My Movie Watchlist</h2>
      <MoviesList movies={movies} refreshMyWatchList={refreshMyWatchList} />
    </div>
  );

}