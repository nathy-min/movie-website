import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=3d30e526'
function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search);
    console.log(data.Search);
  }
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    searchMovies("spiderman")
    

  }, [])
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div >
        <input 
        placeholder = 'Search for movies'
        value={searchTerm}
        onChange = {(e) => setSearchTerm(e.target.value)}

        />
        <img 
          src = {SearchIcon}
          alt = 'search'
          onClick={() => searchMovies(searchTerm)}
        />   
    </div>
      {
        movies?.length > 0 ? 
        (
        <div className='container'>
          {
            movies.map((movie) => {
              return <MovieCard movie = {movie} />
            })
          }
          
        </div>
        ) :
        (
          <div className='empty'> 
            <h1>No Movies Found</h1>
          </div>  
        )
      }
      
    </div>
  );
}

export default App;
