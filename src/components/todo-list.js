import React from 'react';
import TodoListItem from './todo-list-item';
import { SORT_ORDER_COMPLETED, SORT_ORDER_TITLE, SORT_ORDER_USER } from '../helpers/filter-constants';

const TodoList = ({ todos, onSort }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={() => onSort(SORT_ORDER_COMPLETED)}>
            Completed
          </th>
          <th scope="col" onClick={() => onSort(SORT_ORDER_TITLE)}>
            Title
          </th>
          <th scope="col" onClick={() => onSort(SORT_ORDER_USER)}>
            User
          </th>
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
