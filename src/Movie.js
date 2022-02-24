import { addToWatchList } from './fetch-utils';

export default function Movie({ movie, onWatchList, reloadWatchList }) {
  const watchedMovie = onWatchList(movie.id);
  console.log(watchedMovie);
  async function handleClick(){
    if (!watchedMovie) {
      const watchListMovie = {
        title: movie.title,
        description: movie.overview,
        poster: movie.poster_path,
        api_id: movie.id,
      };
      await addToWatchList(watchListMovie);
      await reloadWatchList();
    }
  }
  return (
    <div
      title='movie'
      onClick={handleClick}
      className={`movie ${watchedMovie ? 'watched' : ''}`}>
      <h1>{watchedMovie && 'watched'}</h1>
      <h2>{movie.title}</h2>
      <h3>{movie.description}</h3>
      <div>
        <img className='image' src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'https://www.placebear.com/150/150'} />
      </div>
    </div>
  );
}