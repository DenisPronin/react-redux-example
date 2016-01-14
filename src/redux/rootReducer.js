import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import friendsList from './modules/friendsList'
import githubUsers from './modules/githubUsers'

export default combineReducers({
  counter,
  friendsList,
  githubUsers,
  router
})
