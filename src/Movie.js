import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component{
//     //각 props의 타입 명세 해주기
//     static propTypes={
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         return(
//             <div>
//             <MoviePoster poster={this.props.poster}/>
//             <h1>{this.props.title}</h1>
//             </div>
//         );
//     }
// }

// class MoviePoster extends Component{
//     static propTypes={
//         poster:PropTypes.string.isRequired
//     }
//     render(){
//         console.log(this.props);
//         return(
//             <img src={this.props.poster}></img>
//         );

//     }
// }
//return을 해주기 위해 존재하는 멍청한 컴포넌트

  //            <MoviePoster poster={poster} alt={title}/>
// function Movie({title,poster,genres,synopsis}){
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
//클래스 형태로 만들어진 컴포넌트는 반드시 render가 있어야한다.
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