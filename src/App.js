import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import TopBar from './topBar';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      chatRooms: [
        {value: 'room1', label: 'Room 1'},
        {value: 'room2', label: 'Room 2'}
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <TopBar dropDownOptions={this.state.chatRooms} />
      </div>
    );
  }
}

export default App;
