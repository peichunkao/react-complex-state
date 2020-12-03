import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(() => {
      const randomInstructor = Math.floor(Math.random() * this.state.instructors.length)
      const randomHobby = Math.floor(
        Math.random() * 
        this.state.instructors[randomInstructor].hobbies.length)
      const newInstructors = this.state.instructors.map((instructor, index) => {
        if(randomInstructor === index) {
          const newHobbies = instructor.hobbies.slice(randomHobby,1);
          return {...instructor, hobbies: newHobbies}
        }
        return instructor;
      })
      this.setState({instructors: newInstructors})
    }, 5000);
  }

  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
