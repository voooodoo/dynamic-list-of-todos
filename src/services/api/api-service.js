export default class TodoService {
  _baseUrl = ' https://jsonplaceholder.typicode.com';

  _getData = url => {
    return fetch(`${this._baseUrl}/${url}`).then(res => res.json());
  };

  getUsers = () => this._getData('users');

  getTodos = () => this._getData('todos');
}
