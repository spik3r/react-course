import React, { Component } from 'react';

import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    {name: 'Max', age: 28},
    {name: 'Manu', age: 29},
    {name: 'Stephanie', age: 26}
  ],
  otherState: 'some stuff'
}
  switchNameHandler = (newName) => {
    // console.log("was clicked")
    this.setState( {persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 30}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState( {persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 30}
    ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px, solid, blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <div>Hi h1 foo</div>
        <p>wooooooo </p>

        <button 
        style={style}
        onClick={() => this.switchNameHandler('Maxxxxx!!')}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Baaar!')}> My Hobbies: Sleeping</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
