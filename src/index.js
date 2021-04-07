import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3';
import Comp5 from './Comp5'
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Comp1/>
    <Comp2/>
    <Comp3/>
    <Comp5/>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
