import fetch from 'isomorphic-fetch'

const baseUrl = 'https://api.github.com/';

export default {
  fetchUsers() {
    return fetch(baseUrl + 'users')
      //.then(function (response) {
      //  return response;
      //})
      //.catch(function (err) {
      //  return Promise.reject(err);
      //});
  }
};
