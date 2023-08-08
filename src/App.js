import React, {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

//4bb80060  #API-key
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=4bb80060';

const API_URL_moviedb_start = 'https://api.themoviedb.org/3/search/movie?query=';
const moviedb_movieName = 'batman';
const API_URL_moviedb_end = '&include_adult=false&language=en-US&page=1';

const movie1 = {
      "Title": "Spiderman",
      "Year": "1990",
      "imdbID": "tt0100669",
      "Type": "movie",
      "Poster": "N/A"
  };

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWI2NDM0YTgzMGIxMmFkYTljMTAyYWFlYjc5OTNlYSIsInN1YiI6IjY0Y2JmNzdlMmYyNjZiMDBmZjU3ZGI4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pfdw2SZL7_0X8r-Q4JEKkW3s8pGF8dSJIL7PIR8epNE'
    }
  };

  //https://api.themoviedb.org/3/search/movie?query=&batman&&include_adult=false&language=en-US&page=1
  /*
  fetch('https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err)); 
  */
const App = () =>{


   const [movies, setMovies] = useState([]);
   const [SearchTerm, setSearchTerm] =useState('');
   //const [updated, setUpdated] = useState('');

   //function handleKeyDown (event) {
   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        // 👇 Get input value
        //setSearchTerm(event.target.value);
        searchMovies(event.target.value);
      }
    };
  

   const searchMovies = async(title) => {
      //const response = await fetch(`${API_URL}&s=${title}`);  //Good
      const response = await fetch(`${API_URL_moviedb_start}${title}${API_URL_moviedb_end}`, options);
      const data = await response.json();
      console.log(data.results[0]);
      //console.log(data.Search);
      setMovies(data.results);
   };

   useEffect(()=>{
      searchMovies('Spiderman');
   },[]);

   return (
      <div className='app'>
         <h1>Movie Search ...</h1>

         <div className='search'>
            <input
            placeholder='Search for Movies'
            value= {SearchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            //onKeyDown={handleKeyDown} 
            onKeyDown={(e) => handleKeyDown(e)}           
            />

            <img
               src={SearchIcon}
               alt='search'
               onClick={() => searchMovies(SearchTerm)}
               
            />
         </div>

         {
            movies?.length > 0
            ? (
               <div className='container'>
                  {movies.map((movie) => (
                     <MovieCard movie={movie} />
                  ))}
            </div>
            ) : (
               <div className='empty'>
                  <h2>No Movies Found - Try again!!</h2>
               </div>
            )
         };
      </div>
   );

};

export default App;

