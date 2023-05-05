// src/components/UserSelection.js

import React from 'react';

const UserSelection = ({ onUserSelect }) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  const handleChange = (e) => {
    onUserSelect(users.find((user) => user.id === parseInt(e.target.value)));
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select a user</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserSelection;