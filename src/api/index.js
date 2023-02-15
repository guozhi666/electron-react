import { message } from 'antd';
import * as login from './login/login'

const axios = require('axios');

const base_url = process.env.NODE_ENV === 'production' ? '' : 'http://172.0.11.121:8087'

axios.interceptors.request.use(config => {
  const Authorization = localStorage.getItem('token') || '';
  config.headers.Authorization = Authorization;
  config.url = base_url + config.url
  return config;
})

let isAllowMessage = true;
axios.interceptors.response.use(respone => {
  if (respone && respone.status === 200) {
    if (respone.data.code === 401 || respone.data.code === 403) {
      // window.location.href=window.location.origin;
      message.error(respone.data && respone.data.msg);
    } else if(respone.data.code === 500)  {
      if (isAllowMessage) {
        isAllowMessage = false;
        message.error(respone.data.msg ? respone.data.msg : '服务器错误，请联系管理员');
        setTimeout(() => {
          isAllowMessage = true;
        }, 4000)
      }
    }
    return respone.data
  } else {
    if (isAllowMessage) {
      isAllowMessage = false;
      message.error('网络异常，请稍后再试!');
      setTimeout(() => {
        isAllowMessage = true;
      }, 4000)
    }
  }
}, () => {
  if (isAllowMessage) {
    isAllowMessage = false;
    message.error(respone.data.msg ? respone.data.msg : '网络异常，请稍后再试!');
    setTimeout(() => {
      isAllowMessage = true;
    }, 4000)
  }
  return respone.data
})

export {
  login,
}