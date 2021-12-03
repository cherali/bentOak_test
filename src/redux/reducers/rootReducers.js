import { combineReducers } from 'redux'
import user from './userReducers'

const rootReducers = combineReducers({
  user,
})

export default rootReducers
