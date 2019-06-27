export default class TodoService {
  _baseUrl = ' https://jsonplaceholder.typicode.com';

  getUsers = () => {
    return fetch(`${this._baseUrl}/users`).then(res => res.json());
  };

  getTodos = () => {
    return fetch(`${this._baseUrl}/todos`).then(res => res.json());
  };
}
