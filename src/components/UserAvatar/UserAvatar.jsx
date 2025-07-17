import React from 'react';
import './UserAvatar.scss';

const UserAvatar = ({ src, size = 'medium' }) => {
  const sizeClass = `avatar-${size}`;
  
  return (
    <div className={`avatar glow ${sizeClass}`}>
      <img src={src} alt="User avatar" />
    </div>
  );
};

export default UserAvatar;