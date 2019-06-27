import React from 'react';

const User = ({ user: { name } }) => {
  return <b>{name}</b>;
};

export default User;
