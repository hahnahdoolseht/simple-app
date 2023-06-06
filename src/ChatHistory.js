import React from 'react';

const ChatHistory = ({ messages }) => {
  return (
    <div>
      <h2>Chat History</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;