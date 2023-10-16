import React from 'react';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendItem } from 'components/FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendItem friend={friend} key={friend.id} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};
