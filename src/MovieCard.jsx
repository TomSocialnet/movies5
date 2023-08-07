import React from 'react';

const images_uri = 'http://image.tmdb.org/t/p/'
const image_size = 'w500';

const MovieCard = ({movie}) => {
   return (
      <div className='movie'>
         <div>
            <p>{movie.release_date}</p>
         </div>

         <div>
            <img src={ movie.poster_path !== '' ? `${images_uri}${image_size}${movie.poster_path}` :  'https://via.placeholder.com/400'} alt={movie.title}  />
         </div>

         <div>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
         </div>
      </div>
   )
}

export default MovieCard