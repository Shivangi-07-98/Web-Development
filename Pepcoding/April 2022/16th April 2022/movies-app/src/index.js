import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { redirect } from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    <App />
    // </BrowserRouter>
);

// Netlify Deployment
// public -> (make file) --redirects -> (inside file) /*/index.html 200 -> npm run build -> netlify login -> sites -> drag and drop build file