import React from 'react';
import './App.scss';
import Backlog from './components/Backlog'
import MyCalendar from './components/Calendar'
import Header from './components/Header'

function App() {
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
