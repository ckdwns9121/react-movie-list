import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


const Movie =({title,poster,genres,synopsis}) =>{
    return(
        <div className="Movie">
            <div className="Movie_Column">
                <img src ={poster} alt={title} class="Movie_Poster"></img>
            </div>
            <div className="Movie_Column">
             <h1>{title}</h1>
             <div className="Movie_Genres">
               {genres.map((genre,index) =><MovieGenres genre={genre} key={index}/>)}
             </div>
             <p className="Movie_Synopsis">
             {synopsis}
             </p>
            </div>
        </div>
    );
}

function MoviePoster({poster,alt}){
    return(
        <img src={poster} alt="none" title={alt} class="Movie_Poster"></img>
    )
}
function MovieGenres({genre}){
    return(
        <span className="Movie_Genre">{genre} </span>
    )
}

Movie.prototype={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.string.isRequired,
    synopsis:PropTypes.string.isRequired
}
MoviePoster.prototype = {
    poster:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}
MovieGenres.prototype={
    genre:PropTypes.string.isRequired
}

export default Movie;
