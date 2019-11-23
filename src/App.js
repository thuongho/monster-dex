import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

// if we don't import Component, we can use class App extends React.Component
class App extends Component {
  constructor() {
    // call super on Component to get state
    // super extends component method onto App class
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    // cannot update state with this.state = something
    // must use this.setState() to update state

    // bind this to handleChange
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // arrow function auto bind this to App Class or when handleChange was first defined
  // lexical scoping - lexically scope this to when method was first defined which is App component
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  // available through Component
  render() {
    // destructuring
    // pulling monsters and searchField from state and setting it to a const
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
