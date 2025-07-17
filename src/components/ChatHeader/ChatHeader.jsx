import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import './ChatHeader.scss';

const ChatHeader = ({ user }) => {
  return (
    <div className="chat-header glass">
      <div className="user-info">
        <UserAvatar src={user.avatar} />
        <div className="user-details">
          <h3>{user.name}</h3>
          <p className="status">{user.status}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;