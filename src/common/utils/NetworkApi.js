import axios from 'axios'
import { dispatch, select } from '../../index'
import { _deleteKey } from './helpers'

const CancelToken = axios.CancelToken
let cancel

function NetworkApi({ method, url, successType, failType, bodyParams, headerParams, cancelable = false, }) {
  const token = select(s => s?.user?.userInfo?.token)

  let headers = {
    ...headerParams,
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }

  // remove token if its undefined
  if (!token) {
    headers = _deleteKey(headers, 'Authorization')
  }



  async function serverCall(cb, fcb) {
    try {
      // if cancel flag is set and cancel exist cancel request
      cancelable && cancel && cancel()

      const res = await axios({
        method: method,
        headers,
        data: bodyParams,
        url,
        // set cancel token
        cancelToken: new CancelToken(function (c) {
          if (cancelable) cancel = c;
          else cancel = undefined
        }),
        // add timeout
        timeout: 20000,
      })

      // first: dispatch and send data to reducers
      dispatch({ type: successType, payload: res.data })
      !!cb && cb(res.data)

    } catch (err) {
      // need err.request.readyState //4= resolve
      // need err.request.status // the status code 404,403,... // 0= network connection err

      // if network connection is not available
      if (err?.request?.readyState === 4 && err?.request?.status === 0) {

      }

      // logout user if token invalid purge user.
      // implementation depend on server error handler

      // custom error handler added here!

      // dispatch failed type
      dispatch({ type: failType, payload: err?.response?.data || {} })
      !!fcb && fcb(err.response)
      // log err
      console.log('err', JSON.stringify(err))
    }
  }

  return { run: serverCall }
}

export default NetworkApi
