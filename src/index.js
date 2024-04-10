import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Slider from './components/slider';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<App/>}/>
 </Routes>
 </BrowserRouter>
);


