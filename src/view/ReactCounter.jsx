import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {store} from '../redux/store/store'
import ActionCreator from '../redux/action/action'
export default class ReactCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       num:store.getState().Counter
    }
    this.state.unsubscribe=store.subscribe(()=>{
      this.setState({
        num:store.getState().Counter
      })
    })
  }
  componentWillUnmount(){
    // this.state.unsubscribe();
  }
  AddNum(payload){
    store.dispatch(ActionCreator.AddNumber(payload))
  }
  MinusNum(payload){
    store.dispatch(ActionCreator.MINUS_NUM(payload))
  }
  render() {
    return (
      <div>
        <h5>数字：{this.state.num}</h5>
        <br/>
        <Button onClick={()=>{this.AddNum(1)}}>+1</Button>
        &nbsp;
        <Button onClick={()=>{this.MinusNum(1)}}>-1</Button>
      </div>
    )
  }
}
