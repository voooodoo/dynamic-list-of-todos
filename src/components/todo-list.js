import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Completed</th>
          <th scope="col">Title</th>
          <th scope="col">User</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
