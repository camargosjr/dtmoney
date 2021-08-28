import React from 'react';
import ReactDOM from 'react-dom';
import {createServer} from 'miragejs';
import {App} from './App';

createServer({
  routes(){
    
  }
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);