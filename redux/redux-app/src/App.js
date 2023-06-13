import logo from './logo.svg';
import './App.css';
import NewComp from './NewComp'
import { Component } from 'react';

class App extends Component {
  styles = {
    fontStyle: 'bold',
    color: 'teal'
  }

  render() {
    return (
      <div>
        <h1 style={this.styles}>Welcome</h1>
        <NewComp />
      </div>
    )
  }
}

export default App;
