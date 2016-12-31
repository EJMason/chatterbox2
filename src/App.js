import React, { Component } from 'react';
import {escape} from 'underscore';
import axios from 'axios';

import './config.js';
import './App.css';

import TopBar from './topBar';
import ChatBox from './chatBox';
import MessageBox from './messageBox';
//import getMessages from './getData';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentChatRoom: '',
      chatRooms: [],
      lastMessage: ''
    }
  }

  getAllData(){
    return axios('/1/classes/messages');
  }

  getChatRooms(chatObject) {
    
    console.log(chatObject);
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
    console.log(this.state.chatRooms);
  }

  componentDidMount () {
  this.getAllData()
    .then((data) => {
      this.getChatRooms(data);
    })
    
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