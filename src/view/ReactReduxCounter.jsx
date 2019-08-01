import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import ActionCreator from '../redux/action/action'
const mapStateToProps = (state) =>{
  return {
    Num:state.Counter,
    Name:"zhangsan"
  }
}

const mapDispatchToProps =(dispatch)=>({
  AddNum(payload){
    dispatch(ActionCreator.AddNumber(payload))
  },
  MinusNum(payload){
    dispatch(ActionCreator.ASY_MINUS_NUM(payload))
  }
})
export class ReactReduxCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
       age:18
    }
  }
  
  render() {
    
    return (
      <div>
        <h5>react-redux计数器</h5>
        {this.props.Num}
        <br/>
        <Button onClick={()=>this.props.AddNum(1)}>+1</Button> &nbsp;
        <Button onClick={()=>this.props.MinusNum(1)}>-1 使用redux-thunk</Button>
        <hr/>
        <span>名字是：</span>
        {this.props.Name}
        <br/>
        年龄：{this.state.age}

      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxCounter)
