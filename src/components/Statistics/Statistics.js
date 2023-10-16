import React from 'react';
import PropTypes from 'prop-types';
import {
  ListStats,
  SectionStatistics,
  TitleStatistics,
  Text,
} from './Statistics.styled';
import { ListItem } from 'components/Profile/Profile.styled';
import { getRandomColor } from '../../JS/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title ? <TitleStatistics>{title}</TitleStatistics> : null}
      <ListStats>
        {stats.map(item => (
          <ListItem
            key={item.id}
            style={{ backgroundColor: getRandomColor(), padding: '5px' }}
          >
            <Text>{item.label}</Text>
            <Text>{item.percentage}%</Text>
          </ListItem>
        ))}
      </ListStats>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
