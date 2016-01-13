import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import friendsList from './modules/friendsList'

export default combineReducers({
  counter,
  friendsList,
  router
})
