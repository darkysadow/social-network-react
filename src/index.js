import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import StoreContext from './redux/store-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntrieTree = (state) => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>
  );
}

rerenderEntrieTree(store.getState());

store.subscribe(() => { rerenderEntrieTree(store.getState()); });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
