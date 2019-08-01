import {Action} from './../action/action'

export default (state=0,action)=>{
  switch(action.type){
    case Action.ADD_NUM:
    {
      return state+action.payload
    }
    case Action.MINUS_NUM: return state-action.payload
    default:
      return state;
  }
}