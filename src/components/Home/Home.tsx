import { MovieSearch } from '../MovieSearch/MovieSearch'
import './Home.css'
export const Home = () => {
  return (
    <>
      <div className='jumbotron'>
        <MovieSearch />
      </div>
    </>
  )
}
