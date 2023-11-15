import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './Hookes/App'
import DomApp from './roterDOM/App'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    
        <DomApp />
   
    </BrowserRouter>
  </React.StrictMode>
);
