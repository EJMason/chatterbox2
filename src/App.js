import React, { Component } from 'react';

import './App.css';

import TopBar from './topBar';
import ChatBox from './chatBox';
import MessageBox from './messageBox';

import getMessages from './getData';

class App extends Component {
  constructor(props){
    super(props);

    console.log(getMessages(this.processData));

    this.state = {
      chatRooms: [
        {value: 'room1', label: 'Room 1'},
        {value: 'room2', label: 'Room 2'}
      ]
    }
  }

  processData (data) {
    console.log(data);
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

/**
 * Why cant I put stuff in other folders?
 * What is the best practice for encapulating methods like getData.js
 *   
 */