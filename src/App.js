import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persosn: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Steph', age: 31 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person
          name={this.state.persosn[0].name}
          age={this.state.persosn[0].age}
        >
          My Hobbies: Hiking
        </Person>
        <Person
          name={this.state.persosn[1].name}
          age={this.state.persosn[1].age}
        />
        <Person
          name={this.state.persosn[2].name}
          age={this.state.persosn[2].age}
        />
      </div>
    );
  }
}

export default App;
