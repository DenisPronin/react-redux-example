import fetch from 'isomorphic-fetch'

const baseUrl = 'https://api.github.com/';

export default {
  fetchUsers() {
    return fetch(baseUrl + 'users')
        .then(response => {
          return response.json();
        })
        .catch(error => {
          return error;
        });
  }
};
