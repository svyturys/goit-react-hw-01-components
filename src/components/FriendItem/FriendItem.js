import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendItemAvatar,
  FriendItemStatus,
  FriendListItem,
  FriendItemText,
} from './FriendItem.styled';

export const FriendItem = ({ friend }) => {
  return (
    <FriendListItem>
      <FriendItemStatus
        style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
      />
      <FriendItemAvatar src={friend.avatar} />
      <FriendItemText>{friend.name}</FriendItemText>
    </FriendListItem>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
