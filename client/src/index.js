import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { UserProvider } from "./contexts/UserContext";

ReactDOM.render(
    // <FontStyles />
    <UserProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </UserProvider>,
  document.getElementById('root')
);