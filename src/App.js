import React from 'react';
import './App.scss';
import Backlog from './components/Backlog'
import MyCalendar from './components/Calendar'
import Header from './components/Header'
import ReactModal from 'react-modal'

function App() {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <p>Modal content</p>
      <button onClick={hideModal}>Hide modal</button>
    </ReactModal>
  ));
  return (
    <div className="App">
       <Header />
      <body className='Grid-body'>
          <MyCalendar />
          <Backlog />
      </body>
    </div>
  );
}

export default App;
