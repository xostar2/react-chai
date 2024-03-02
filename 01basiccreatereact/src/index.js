import React from 'react';
import ReactDOM from 'react-dom/client';//reactDOm is implimentation of react on web and react netive is implimentation of react on mobile

import App from './App';


//reactDOM virtual DOM=react's own personal DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   //root render
  <React.StrictMode>
    <App />   
  </React.StrictMode>
);

