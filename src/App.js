import './App.css';
import Header from './components/header/Header';
import Body from './components/Body';
import './scss/style.scss'
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import MainPreloader from './components/common/MainPreloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return (<MainPreloader />)
    } else {
      return (
        <div className="wrapper">
        <BrowserRouter>
          <Header />
          <Body />
          <footer></footer>
        </BrowserRouter>
      </div>
      )
    }
    
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {initializeApp})(App)

/*function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Body />
        <footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;*/
