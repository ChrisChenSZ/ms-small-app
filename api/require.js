// Mock
let defalutUrl = 'http://dev.quliansg.com:3000'

// develop
defalutUrl = 'http://dev.quliansg.com:18765'
defalutUrl = 'http://127.0.0.1:7001'

// test
// url = 'http://test.quliansg.com:18765'
const request = (method) => {
  return function (url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url:`${defalutUrl}${url}`,
        data,
        header: {'content-type':'application/json'},
        method,
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
          resolve(result)
        },
        fail: (err)=>{
          reject(err)
        },
        complete: ()=>{}
      });
    })
  }

}

const sTrequire = {
  get: request('GET'),
  post: request('POST'),
  PUT: request('PUT')
}

export default sTrequire
