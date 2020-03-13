import React from 'react';
import './App.css';
import Backlog from './components/Backlog'
import Calendar from './components/Calendar'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <header>
       <Header />
      </header>
      <body className='Grid-body'>
        <div className='Calendar'>
          <Calendar />
        </div>
        <div className='Backlog'>
          <Backlog />
        </div>
      </body>
    </div>
  );
}

export default App;
