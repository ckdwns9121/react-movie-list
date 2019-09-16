
import React from 'react';
import ReactDOM from 'react-dom'; //리엑트를 웹에 출력을 도와주는 라이브러리 리엑트네이티브는 모바일에 출력을 도와줌
import './index.css';  
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));  //리액트는 1개의 컴포넌트를 render 하고 class이름에 렌더함

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
