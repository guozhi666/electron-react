const axios = require('axios');

export const login = (params) => {
  return axios({
    method: 'POST',
    url: '/login', 
    data: JSON.stringify(params),
    headers:{
      'Content-Type':'application/json'
    }
  })
}

export const captchaImage = (params) =>{
  console.log('params', params)
  return axios({
    method: 'GET',
    url:'/captcha/captchaImage?type=math',
    data: params,
    headers:{
      'Content-Type':'application/json'
    },
    responseType: 'blob'
  })
}