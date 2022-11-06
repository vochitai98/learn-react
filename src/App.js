
import './App.css';
//import { Component } from 'react';
import Person from './components/Person';
import Example from './components/Example';
import { useState } from 'react';
function App(){
  const [person,setPerson]=useState([
    {name : "VTC", age : "24"},{name : "VHD",age : "25"},
  ]);
  const changeName  = ()=>{
    setPerson([
      {name : "VTC", age : "4"},{name : "VHD",age : "5"},
    ]
    );
  }
    return (
      <div className="App">
        
        <h1>Hoc React dễ lắm ai ơi</h1>
        <button onClick = {()=>changeName()}>Change age</button>
        <Person name = {person[0].name} age ={person[0].age}>I'm a student.</Person>
        <Person name = {person[1].name} age ={person[1].age}/>
        <Example></Example>
      </div>
    );
}
export default App;
