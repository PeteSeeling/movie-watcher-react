import { watchMovie } from './fetch-utils';
import React from 'react';

export default function WatchListItem({ movie, refreshMyWatchlist }) {

  async function handleClick(){
    await watchMovie(movie.id);
    await refreshMyWatchlist();
  }
  return (
    <div
      onClick={handleClick}
      className='movie-and-watchlist-item'>
      <h3>{movie.title}</h3>
      <h4>{movie.description}</h4>
     
      <div>
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'https://www.placebear.com/150/150'} />
      </div>
    </div>
   
  );
}