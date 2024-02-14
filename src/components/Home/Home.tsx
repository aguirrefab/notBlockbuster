/* eslint-disable no-extra-semi */
import { useState } from 'react';
import { MovieSearcher } from '../MovieSearcher/MovieSearcher';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import './Home.css';
import { MovieCard } from '../MovieCard/MovieCard';

export const Home = () => {
  const [movieName, setMovieName] = useState<string>('');

  const handleGetNameMovie = (input: string) => {
    setMovieName(input);
  };
  const { movieData } = useFetchMovies(movieName);

  return (
    <>
      <section className='jumbotron'>
        <MovieSearcher handleGetNameMovie={handleGetNameMovie} />
      </section>

      <section>
        <ul className='movies'>
          {movieData?.map((movie) => {
            return (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
