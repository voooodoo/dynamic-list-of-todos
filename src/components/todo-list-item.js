import React from 'react';
import User from './user';

const TodoListItem = props => {
  const {
    todo: { title, completed, user },
  } = props;

  return (
    <tr>
      <td>
        <input type="checkbox" checked={completed} readOnly />
      </td>
      <td>{title}</td>
      <td>
        <User user={user} />
      </td>
    </tr>
  );
};

export default TodoListItem;
