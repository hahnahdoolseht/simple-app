import React, { useState } from 'react';
import Login from './Login';
import Account from './Account';
import ContactList from './ContactList';
import ChatHistory from './ChatHistory';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleLogin = (username, password) => {
    // Simulated login functionality (replace with actual authentication)
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
      setUsername(username);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setSelectedContact(null);
    setMessages([]);
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    setMessages([]); // Clear chat history when selecting a new contact
  };

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  // Simulated contact list data
  const contacts = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ];

  return (
    <div>
      {loggedIn ? (
        <div>
          <Account username={username} onLogout={handleLogout} />
          <ContactList
            contacts={contacts}
            onSelectContact={handleSelectContact}
          />
          {selectedContact && (
            <div>
              <h2>Chat with {selectedContact.name}</h2>
              <ChatHistory messages={messages} />
              <input
                type="text"
                placeholder="Type your message"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage(e.target.value);
                    e.target.value = '';
                  }
                }}
              />
            </div>
          )}
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
