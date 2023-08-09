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
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <h4>Vote Count: {movie.vote_count} </h4>

            <h4>Vote Avg: {movie.vote_average} </h4>

            <h4>Popularity: {movie.popularity} </h4>
    
            <h4>Release Date: {movie.release_date}</h4>
         </div>

      </div>
      
   )
}

export default MovieCard