import React,{ Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component  {
  state ={};

   componentDidMount(){
    this._getMovies();
   }

    _renderMovies = () =>{
    const movies = this.state.result.map(movie=>{
      console.log(movie.title)
      return <Movie 
      title={movie.title} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
      });
      return movies;
   }
   
   _getMovies = async () =>{
      const result = await this._callApi();
      this.setState({result});
      console.log(this.state);

   }
  
   _callApi = ()=>{
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
   .then(response => response.json())
   .then(json => json.data.movies)
    .catch(err=>console.log(err))
   
  }

  render(){
    const {result} = this.state;
    return (
    <div className={result?"App" : "App-loading"}>
      {result ? this._renderMovies() : <span class="test">Loading</span>}
    </div>
  );
 }
}

export default App;
