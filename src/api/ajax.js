import axios from 'axios';

export const reqUser = (data, type = "get") => {
  // return axios.get()
  console.log(data);
  return new Promise((resolve, reject) => {
    let promise;
    debugger;
    if (type === "get") {
      promise = axios.get(`/user?id=${data}`)
    } else if (type === 'post') {
      promise = axios.post('/user', {
        data
      })
    }
    promise.then(res=>{
      console.log(res.data)
       resolve(res.data)
      
       
    }).catch(err=>console.log(err))
  })
}