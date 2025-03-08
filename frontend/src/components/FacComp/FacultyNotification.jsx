import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, push } from 'firebase/database';
import './FacultyNotification.css'; // Import the CSS file for styling

const FacultyNotification = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const db = getDatabase();
    const facultyMessagesRef = ref(db, 'messages/faculty');
    const studentMessagesRef = ref(db, 'messages/student');

    const handleNewMessages = (snapshot, source) => {
      const data = snapshot.val();
      if (data) {
        const newMessages = Object.values(data).map(message => ({
          ...message,
          source,
        }));
        setMessages(prevMessages => [...prevMessages, ...newMessages]);
      }
    };

    const facultyListener = onValue(facultyMessagesRef, snapshot => handleNewMessages(snapshot, 'faculty'));
    const studentListener = onValue(studentMessagesRef, snapshot => handleNewMessages(snapshot, 'student'));

    return () => {
      // Clean up listeners
      facultyListener();
      studentListener();
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const db = getDatabase();
      const messagesRef = ref(db, 'messages/faculty');
      const message = {
        username: username,
        text: newMessage,
      };
      push(messagesRef, message);
      setNewMessage('');
    }
  };

  return (
    <div className="notification-container">
      <h1>Notifications</h1>
      <div className="message-box">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <strong>{message.username}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default FacultyNotification;