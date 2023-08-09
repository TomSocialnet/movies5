import React from 'react';

const images_uri = 'http://image.tmdb.org/t/p/'
const image_size = 'w500';

const MovieCard = ({movie}) => {
   return (
      <div className='movie'>
         <div>
            <h4>{movie.release_date}</h4>
         </div>

         <div>
            <img src={ movie.poster_path !== '' ? `${images_uri}${image_size}${movie.poster_path}` :  'https://via.placeholder.com/400'} alt={movie.title}  />
         </div>

         <div>

            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <br></br>
            <span>Vote Count: {movie.vote_count} </span>
            <p></p>
            <span>Vote Avg: {movie.vote_average} </span>
            <p></p>
            <span>Popularity: {movie.popularity} </span>
            <p></p>
            <h4>Release Date: {movie.release_date}</h4>
         </div>

      </div>
      
   )
}

export default MovieCard