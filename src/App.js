import React from 'react';
import './App.scss';
import Backlog from './components/Backlog/Backlog'
import MyCalendar from './components/Calendar/Calendar'
import Header from './components/Calendar/Header'
import ModalButton from '../src/components/Modal/ModalButton'


function App() {
  return (
    <div className="App">
       <Header />
       
       <ModalButton />
     
      <body className='Grid-body'>
          <MyCalendar />
          <Backlog />
      </body>
    </div>
  );
}

export default App;
