import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "tachyons";
import './flower.css';
import Vogues from './vogues.js';
import Flowers from './flower.js';
import Navigationbar from './navbar.js';
import Card from './Card.js';
import Vintage from './vintage.js';
import Footer from './footer.js';
import Colour from './colour.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigationbar/>
    <Card/>
    <Vogues/>
    <Flowers/>
    <Vintage/>
    <Colour/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();