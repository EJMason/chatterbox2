import React, { Component } from 'react';

import './App.css';

import TopBar from './topBar';
import ChatBox from './chatBox';
import MessageBox from './messageBox';

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
        <ChatBox />
        <MessageBox />
      </div>
    );
  }
}

export default App;

