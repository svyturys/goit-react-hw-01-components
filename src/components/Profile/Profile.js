import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Avatar,
  Box,
  Name,
  Text,
  ListStats,
  ListItem,
  ItemTitle,
  ItemQuantity,
} from './Profile.styled';

export const Profile = ({
  data: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Wrapper>
      <Box>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Text>{`@${tag}`}</Text>
        <Text>{location}</Text>
      </Box>
      <ListStats>
        <ListItem>
          <ItemTitle>Followers</ItemTitle>
          <ItemQuantity>{followers}</ItemQuantity>
        </ListItem>
        <ListItem>
          <ItemTitle>Views</ItemTitle>
          <ItemQuantity>{views}</ItemQuantity>
        </ListItem>
        <ListItem>
          <ItemTitle>Likes</ItemTitle>
          <ItemQuantity>{likes}</ItemQuantity>
        </ListItem>
      </ListStats>
    </Wrapper>
  );
};

Profile.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
