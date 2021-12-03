import NetworkApi from '../../common/utils/NetworkApi'
import { authUrl } from '../../common/urls'
import {
  LOGIN_SUCCESS, LOGIN_FAILED,
} from '../constants'


export const loginUser = (data) => NetworkApi({
  url: `${authUrl}/login`,
  method: 'post',
  bodyParams: data,
  successType: LOGIN_SUCCESS,
  failType: LOGIN_FAILED,
}).run()
