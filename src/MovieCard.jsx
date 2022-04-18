import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
        <div className='movie-info'>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
        
        </div>
        
    </div>
    )
}

export default MovieCard;