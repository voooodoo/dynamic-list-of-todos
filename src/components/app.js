import React, { Component } from 'react';
import TodoList from './todo-list';
import ApiService from '../services/api/api-service';
import { SORT_ORDER_COMPLETED, SORT_ORDER_TITLE, SORT_ORDER_USER } from '../helpers/filter-constants';

import '../App.css';

class App extends Component {
  state = {
    todos: [],
    users: [],
    sortField: SORT_ORDER_TITLE,
  };

  apiService = new ApiService();

  getTodosWithUsers(todos, users) {
    return todos.map(todo => {
      return {
        ...todo,
        user: users.find(user => user.id === todo.userId),
      };
    });
  }

  sortTodos(todos, sortField) {
    const callbackMap = {
      [SORT_ORDER_TITLE]: (a, b) => a.title.localeCompare(b.title),
      [SORT_ORDER_USER]: (a, b) => a.user.name.localeCompare(b.user.name),
      [SORT_ORDER_COMPLETED]: (a, b) => a.completed - b.completed,
    };

    const callback = callbackMap[sortField];

    return todos.sort(callback);
  }

  handleSort = sortField => {
    this.setState({ sortField });
  };

  componentDidMount() {
    Promise.all([this.apiService.getTodos(), this.apiService.getUsers()]).then(([todos, users]) => {
      this.setState({
        todos,
        users,
      });
    });
  }

  render() {
    const { todos, users, sortField } = this.state;
    const todoList = this.getTodosWithUsers(todos, users);
    const sortedTodo = this.sortTodos(todoList, sortField);

    return (
      <div className="container">
        <h1 className="text-center">Dynamic list of todos</h1>
        <TodoList todos={sortedTodo} onSort={this.handleSort} />
      </div>
    );
  }
}

export default App;
