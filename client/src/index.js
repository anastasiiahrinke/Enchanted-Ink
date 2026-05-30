import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createContext } from 'react';
import UserStore from './store/UserStore';
import BookStore from './store/BookStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null)
root.render(
  <Context.Provider value={{
    user: new UserStore,
    book: new BookStore
  }}>
    <App />
  </Context.Provider>
);