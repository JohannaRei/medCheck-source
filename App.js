import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="App-title">Welcome to medCheck</h1>
        </header>
        <form onSubmit={userLogin}>
          <p>Please log in</p>
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default App;
