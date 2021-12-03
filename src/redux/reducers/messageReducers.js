import { createReducer } from '../../common/utils/reducerUtil'
import {
  GET_MESSAGE_LIST_SUCCESS, GET_MESSAGE_LIST_FAILED,
} from '../constants'

const initialState = {}


const getMessageListSuccess = (state, payload) => ({ ...state, messages: payload.data })
const getMessageListFailed = state => ({ ...state, messages: undefined })


export default createReducer(initialState, {
  [GET_MESSAGE_LIST_SUCCESS]: getMessageListSuccess,
  [GET_MESSAGE_LIST_FAILED]: getMessageListFailed,
})