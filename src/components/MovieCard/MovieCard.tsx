import { Movie } from '../../models/Movie';
import './MovieCard.css';

export const MovieCard = (props: { movie: Movie }) => {
  return (
    <>
      <section className='movie-card'>
        <img src={props.movie.image} alt={props.movie.title} />
        <h3>{props.movie.title}</h3>
        <p className='movie-detail'>
          {props.movie.year} | {props.movie.type}
        </p>
      </section>
    </>
  );
};
