import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './components/homepage';



function App() {
  let person = {
    fname: 'Yjang',
    lname: 'Wynter'
  }
  return (
    <HomePage firstName={person.fname}/>
  );
}


export default App;
