import { PURGE } from 'redux-persist'
import { createReducer } from '../../common/utils/reducerUtil'
import {
  LOGIN_SUCCESS, LOGIN_FAILED,
} from '../constants'

const initialState = {}

const purgeUser = () => ({ ...initialState })

const loginSuccess = (state, payload) => ({ ...state, token: payload.token })
const loginFailed = state => ({ ...state, token: '' })


export default createReducer(initialState, {
  [PURGE]: purgeUser,
  [LOGIN_SUCCESS]: loginSuccess,
  [LOGIN_FAILED]: loginFailed,
})