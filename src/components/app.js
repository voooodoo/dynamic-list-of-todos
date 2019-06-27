import React, { Component } from 'react';
import TodoList from './todo-list';
import ApiService from '../services/api/api-service';

import '../App.css';

class App extends Component {
  state = {
    todos: [],
    users: [],
    todoList: [],
  };

  apiService = new ApiService();

  getTodosWithUsers = (todos, users) => {
    if (todos.lengnt === 0 || users.lengnt === 0) {
      return [];
    }
    return todos.map(todo => {
      return {
        ...todo,
        user: users.find(user => user.id === todo.userId),
      };
    });
  };

  componentDidMount() {
    Promise.all([this.apiService.getTodos(), this.apiService.getUsers()]).then(([todos, users]) => {
      this.setState({
        todos,
        users,
        todoList: this.getTodosWithUsers(todos, users),
      });
    });
  }

  render() {
    const { todoList } = this.state;
    return (
      <div className="container">
        <h1 className="text-center">Dynamic list of todos</h1>
        <TodoList todos={todoList} />
      </div>
    );
  }
}

export default App;
