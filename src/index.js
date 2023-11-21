import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Provider} from 'react-redux';
import {store} from './Features/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode store={store}>
    <Provider>
    <App />
    </Provider>
  
  </React.StrictMode>
);


