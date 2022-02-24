import { useState, useEffect } from 'react';
import MoviesList from './MovieList';
import { getMyWatchlist, searchMovies } from './fetch-utils';


export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [myWatchlist, setMyWatchList] = useState([]);

  async function handleSearch(e){
    e.preventDefault();

    const movies = await searchMovies(searchQuery);
    // console.log(movies);
    setSearchResults(movies);
  }

  async function refreshMyWatchList(){
    const myOwnWatchlist = await getMyWatchlist();
    setMyWatchList(myOwnWatchlist);
  }

  useEffect(() => {
    refreshMyWatchList();
  }, []);

  function isOnMyWatchList(id) {
    const movieMatch = myWatchlist.find(item => Number(item.id) === Number(id));

    return Boolean(movieMatch);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)} />
        <button>Search Movies</button>
      </form>
      <div className='results'>
          Search Results:
        <MoviesList movies={searchResults} onWatchList={isOnMyWatchList} reloadWatchList={refreshMyWatchList} />
        
      </div>
    </div>
  );




}
