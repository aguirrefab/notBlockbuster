import { useEffect, useState } from 'react';
import { API_ENDPOINT } from './useAppConfig';
import { ResultAPI } from '../models/ResultAPI';
import { Movie } from '../models/Movie';

export const useFetchMovies = (title: string) => {
  const [data, setData] = useState<ResultAPI>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (!title) return;
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}s=${title}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [title]);

  const movieData = data?.Search.map((movie) => {
    return new Movie(
      movie.imdbID,
      movie.Title,
      movie.Year,
      movie.Type,
      movie.Poster
    );
  });

  return { movieData, loading, error };
};
