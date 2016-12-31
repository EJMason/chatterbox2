import React, { Component } from 'react';
import {escape} from 'underscore';
import axios from 'axios';

import './config.js';
import './App.css';

import TopBar from './topBar';
import ChatBox from './chatBox';
import MessageBox from './messageBox';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentChatRooms: [],
      chatRooms: [],
      lastMessage: '',
      currentMessages: []
    }
  }

updateRoomsHandler (currentRooms) {
  this.setState({
    currentChatRooms: currentRooms.split(','),
    currentMessages: [],
    lastMessage: ''
  });
}

/**
 *    _____Methods for retrieving messages from Server_____
 */

  getNewMessages(messages) {
    var messagesToRender = [];
    var i = 0;
    while(i < messages.length && messages[i].objectId !== this.state.lastMessage) {
      console.log(this.state.currentChatRooms);
      if(this._isChatRoom(messages[i].roomname) || this.state.currentChatRooms[0] === "") {
        if(messages[i].hasOwnProperty('text') && messages[i].text.length > 0) {
          messagesToRender.push({
            "createdAt": messages[i].createdAt,
            "objectId": messages[i].objectId,
            "roomname": escape(messages[i].roomname),
            "text": escape(messages[i].text),
            "updatedAt": messages[i].updatedAt,
            "username": escape(messages[i].username)
          });
        }
      }
      i++;
    }
    if(messagesToRender.length > 0){
      this.setState({
        lastMessage: messages[0].objectId,
        currentMessages: this.state.currentMessages.concat(messagesToRender)
      });
    }
  }

  _isChatRoom (chatRoomName) {
    for (let value of this.state.currentChatRooms) {
      if (chatRoomName === value) return true;
    }
    return false;
  }

/**
 *    _____Methods for retrieving data from Server_____
 */

// Refactor to take array of results instead of entire data obj
  getChatRooms(chatObject) {
    var findRooms = {};
    for (let value of chatObject.data.results) {
      if(value.roomname){
        findRooms[escape(value.roomname)] = escape(value.roomname);
      }
    }
    var allRooms = []
    for (var key in findRooms){
      allRooms.push({
        value: key,
        label: key
      })
    }
    this.setState({
      chatRooms: allRooms
    });
  }

/**
 *    _____Required methods______
 */
  componentDidMount () {
    axios('/1/classes/messages')
      .then((response) => {
        this.getChatRooms(response);
        this.getNewMessages(response.data.results);
      }) 
  }

  componentDidUpdate () {
      axios('/1/classes/messages')
        .then((response) => {
          this.getNewMessages(response.data.results);
        }) 
  }

  render() {
    return (
      <div className="App">
        <TopBar 
          dropDownOptions={this.state.chatRooms}
          selectionHandler={this.updateRoomsHandler.bind(this)} />
        <ChatBox messages={this.state.currentMessages}/>
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