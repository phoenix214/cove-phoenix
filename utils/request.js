import axios from 'axios';
import get from 'lodash/get';
import { call, put } from 'redux-saga/effects';
import config from '../config/config';

export const requestPending = type => `${type}_PENDING`;
export const requestSuccess = type => `${type}_SUCCESS`;
export const requestFail = type => `${type}_FAILURE`;

export const request = ({
  type,
  method,
  url,
  headers,
  success,
  fail,
  payloadOnSuccess,
  payloadOnFail,
}) =>
  function* apiRequest(action = {}) {
    const {
      data,
      params,
      onUploadProgress,
      success: successCallback,
      fail: failCallback,
    } = action.payload || {};

    try {
      if (type) {
        yield put({
          type: requestPending(type),
        });
      }
      const token = localStorage.getItem('token');
      axios.defaults.baseURL = config.apiUrl;
      axios.defaults.headers.common.Authorization = token || '';
      const res = yield call(axios.request, {
        url,
        method: method.toLowerCase(),
        headers: headers || {},

        data: data || {},
        params,
        onUploadProgress,
      });
      if (successCallback) {
        successCallback(res.data);
      }
      if (success) {
        success(res.data, action);
      }
      if (type) {
        yield put({
          type: requestSuccess(type),
          payload: payloadOnSuccess ? payloadOnSuccess(res.data, action) : res.data,
        });
      }

      return res.data;
    } catch (err) {
      const errRes = get(err, 'response', err);

      if (failCallback) {
        failCallback(errRes);
      }
      if (fail) {
        fail(errRes);
      }

      if (type) {
        yield put({
          type: requestFail(type),
          payload: payloadOnFail ? payloadOnFail(errRes, action) : errRes,
        });
      }
      return null;
    }
  };

export const getRequest = params => request({ ...params, method: 'get' });
export const postRequest = params => request({ ...params, method: 'post' });
export const putRequest = params => request({ ...params, method: 'put' });
export const deleteRequest = params => request({ ...params, method: 'delete' });

export default request;
