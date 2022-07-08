import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ava1 from './img/pages8.jpg';
import ava2 from './img/pages5.jpg';
import ava3 from './img/pages7.jpg';
import ava4 from './img/pages6.jpg';
import ava5 from './img/pages9.jpg';



let messagesData = [
  { text: 'Йоу, собакі, я Наруто Узумакі. Шо?', id: '1' },
  { text: 'Ачу?', id: '2' },
  { text: 'KMVmkvmropem oe meriomv eokm vemriovmervoerfmvekrmer lkvmerovpmervprme vpmp M mwPMpm vmMVlkml;kmrverfmvl;v;lvm;', id: '3' },
  { text: ' GJbhijLM C PO dmvcodkcmdpcd cO:MN k nvimv V Nofvnfkvpm  mnopm v smpdm ,cm dp[s,dn viomdsplvsmdvdsmvdsmvpod opm vsdvndoiwec,:ncdvkjno im vjspomvp vspdvkvdvm,dvdnf p ioMJoid mniosvvdn cs,', id: '4' }
]

let dialogsData = [
  { name: "billy", surname: "herrington", ava: ava1, lastMessage: "Let`s celebrate...", id: 'user1' },
  { name: "petro", surname: "mostavchuk", ava: ava2, lastMessage: "Aleksiyk Yana!", id: 'user2' },
  { name: "chistiy", surname: "syodnya", ava: ava3, lastMessage: "I`m clear now near you", id: 'user3' },
  { name: "victor", surname: "korneplod", ava: ava4, lastMessage: "Я тебя настигну", id: 'user4' },
  { name: "kama", surname: "pulya", ava: ava5, lastMessage: "Leave the shit", id: 'user5' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
