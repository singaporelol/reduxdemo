import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import {reqUser} from '../api/ajax'


//需要启动json-server 
//服务器辅助：json-server --watch --port 53000 db.json
export default class AxiosEncapsulate extends Component {
  handlerAjax(id=1){
    // axios.get('/user').then(res=>console.log(res.data))
    reqUser(id).then(res=>console.log(res))
  }
  render() {
    return (
      <div>
        <Button onClick={()=>this.handlerAjax()}>send Ajax</Button>
      </div>
    )
  }
}
