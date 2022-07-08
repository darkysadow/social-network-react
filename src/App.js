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
        <Body messagesData={props.messagesData} dialogsData={props.dialogsData}/>
        <footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
