 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Prac1 from './Prac1';
import reportWebVitals from './reportWebVitals';
// import Prac2 from './Prac2';
// import Prac3 from './Prac3';
import App from './App';
// import A from './A';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Prac1/> */}
    {/* <Prac2/> */}
    {/* <Prac3/> */}
    <App/>
    {/* <A/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
