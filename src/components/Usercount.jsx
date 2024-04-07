import React, { useContext } from 'react';
import { UserContext } from '../App';

const UserCount = () => {
 const {state} = useContext(UserContext);

  return (
    <div className="user-count">
      <h3>Total number of users: {state.users.length}</h3>
    </div>
  );
};

export default UserCount;
