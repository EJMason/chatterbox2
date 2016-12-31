import React from 'react';
import './App.css';

import ChatMessage from './chatMessage';

const ChatBox = ({messages}) => {
    return (
        <div className="chatAreaOutside">
            {messages.map((message) => (
                <ChatMessage
                    createdAt={message.createdAt}
                    roomname={message.roomname}
                    text={message.text}
                    username={message.username}
                    key={message.objectId} />
            ))}
        </div>
    );
};

export default ChatBox;
