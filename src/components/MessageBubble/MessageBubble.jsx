import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import './MessageBubble.scss';

const MessageBubble = ({ message, isCurrentUser }) => {
  return (
    <div className={`message ${isCurrentUser ? 'sent' : 'received'}`}>
      {!isCurrentUser && <UserAvatar src={message.avatar} />}
      <div className={`bubble ${isCurrentUser ? 'glass-primary' : 'glass-light'}`}>
        {message.text}
      </div>
    </div>
  );
};

export default MessageBubble;