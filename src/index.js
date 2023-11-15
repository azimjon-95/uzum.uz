import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './Hookes/App'
import DomApp from './App'
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Provider store={store}>
        <DomApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>

);
