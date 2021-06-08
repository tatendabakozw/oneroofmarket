import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tailwindcss/tailwind.css'
import App from './App';
import { StateProvider } from './StateContext/StateProvider';
import reducer, { initialState } from './StateContext/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
