import React from 'react';
import './App.css';

import ChatMessage from './chatMessage';

const ChatBox = () => {
    return (
        <div className="chatAreaOutside">
            <ChatMessage />
            <ChatMessage />
        </div>
    );
};

export default ChatBox;