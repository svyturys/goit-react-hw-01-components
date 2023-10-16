import React from 'react';
import { Profile } from './Profile/Profile';
import dataProfile from '../user.json';
import dataStats from '../data.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile data={dataProfile} />
      <Statistics title="Upload stats" stats={dataStats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
