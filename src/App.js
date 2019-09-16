import React,{ Component } from 'react';
import './App.css';
import Movie from './Movie';

 //리스트는 무조건 고유 key값을 index번호로 명시해줘야함
 
class App extends Component  {
  state ={};

   //didmount는 render이후에 실행되는 메소드
   // 무비리스트를 들고오기위한 준비

   /*

  didmount 에서 getmoive 해준다
  getmoive 에서 callApi 불러오고 state(result) 에 set해준다


   */
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
   
  //상태를 설정하고 비동기로 받아온 데이터를 셋팅
   _getMovies = async () =>{
      const result = await this._callApi();
      this.setState({result});
      console.log(this.state);

   }
  
   //json 으로 비동기식 데이터를 받아오는 함수
   _callApi = ()=>{
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
   .then(response => response.json())
   .then(json => json.data.movies) //json데이터에 movie 라는 데이터를 기준으로 들고온다
  //  .catch(err=>console.log(err))
   
  }
   
   //무비.js에서 그렸던 컴포넌트를 그리는렌더링ㅋ
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
