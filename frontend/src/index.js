import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import "./css/App.css";
import "./css/menu.css";

// 엔트리 포인트의 역할. 리액트의 루트 컴포넌트를 DOM에 마운팅하는 역할을 한다.
// dom에 마운트하기 위해서 react-dom 라이브러리의 render() 함수를 사용
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
