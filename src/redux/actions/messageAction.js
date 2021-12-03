import NetworkApi from '../../common/utils/NetworkApi'
import { messageUrl } from '../../common/urls'
import {
  GET_MESSAGE_LIST_SUCCESS, GET_MESSAGE_LIST_FAILED,
} from '../constants'
import { dispatch } from '../..'


export const getMessages = () => NetworkApi({
  url: `${messageUrl}/users`,
  method: 'get',
  successType: GET_MESSAGE_LIST_SUCCESS,
  failType: GET_MESSAGE_LIST_FAILED,
}).run()



export const updateMessages = data => dispatch({ type: GET_MESSAGE_LIST_SUCCESS, payload: { data } })