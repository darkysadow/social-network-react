import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Body from './components/Body';
import './scss/style.scss'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Body />
    </div>
  );
}

export default App;
