import { combineReducers } from 'redux'
import user from './userReducers'
import messages from './messageReducers'

const rootReducers = combineReducers({
  user,
  messages,
})

export default rootReducers
