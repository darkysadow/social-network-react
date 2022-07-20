import './App.css';
import Header from './components/header/Header';
import Body from './components/Body';
import './scss/style.scss'
import { BrowserRouter } from "react-router-dom";



function App(props) {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Body state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText} sendMessage={props.sendMessage} updateNewMessage={props.updateNewMessage}/>
        <footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
