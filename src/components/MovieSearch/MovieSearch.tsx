import './MovieSearch.css'
export const MovieSearch = () => {
  return (
    <div>
      <form className='form-movie'>
        <label>More than +5000 movies for you</label>
        <input placeholder='Rocky..'></input>
        <button>Search</button>
      </form>
    </div>
  )
}
