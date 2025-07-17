import React, { useState } from 'react';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import MessageBubble from '../../components/MessageBubble/MessageBubble';
import MessageForm from '../../components/MessageForm/MessageForm';
import './ChatPage.scss';

const ChatPage = () => {
const [messages, setMessages] = useState([
  { 
    id: 1, 
    text: 'Hey there! 👋', 
    avatar: 'https://i.pravatar.cc/150?img=13',
    isCurrentUser: false 
  },
  { 
    id: 2, 
    text: 'How are you doing today?', 
    avatar: 'https://i.pravatar.cc/150?img=13',
    isCurrentUser: false 
  },
  { 
    id: 3, 
    text: "I'm good, thanks! How about you?", 
    avatar: 'https://i.pravatar.cc/150?img=13',
    isCurrentUser: true 
  },
]);

const user = {
  name: 'David Wilson', // Male name
  status: 'Online',
  avatar: 'https://i.pravatar.cc/150?img=13'
};

  const handleSendMessage = (message) => {
    const newMessage = {
      id: messages.length + 1,
      text: message,
      avatar: 'https://i.pravatar.cc/150?img=1',
      isCurrentUser: true
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-app">
      <ChatHeader user={user} />
      <div className="chat-messages">
        {messages.map((message) => (
          <MessageBubble 
            key={message.id} 
            message={message} 
            isCurrentUser={message.isCurrentUser} 
          />
        ))}
      </div>
      <MessageForm onSend={handleSendMessage} />
    </div>
  );
};

export default ChatPage;