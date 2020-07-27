import React from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

function App() {
  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <UserOutput username={'akhilgarg07'}/>
      <UserOutput username={'deadth07'}/>
    </div>
  );
}

export default App;
