import React from 'react';
import './App.css';

const ChatMessage = (props) => {
    return (
        <div className="chatEverything">
            <div className="chatUsername">@{props.username}</div>
            <div className="chatBody">{props.text}</div>
        </div>
    );
};

export default ChatMessage;

//