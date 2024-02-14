import React, { useState } from 'react';
import './MovieSearcher.css';

interface MovieSearcherProps {
  handleGetNameMovie: (value: string) => void;
}

export const MovieSearcher = (props: MovieSearcherProps) => {
  const [movieValue, setMovieValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMovieValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleGetNameMovie(movieValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-movie'>
        <label>More than +5000 movies for you</label>
        <input
          type='text'
          value={movieValue}
          onChange={handleInputChange}
          placeholder='Rocky..'
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
};
