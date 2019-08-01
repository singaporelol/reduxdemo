export const Action={
  ADD_NUM:"ADD_NUM",
  MINUS_NUM:"MINUS_NUM"
}
export default {
  AddNumber(payload){
    return{
      type:Action.ADD_NUM,
      payload
    }
  },
  MINUS_NUM(payload){
    return{
      type:Action.MINUS_NUM,
      payload
    } 
  },
  ASY_MINUS_NUM(payload){
    return (dispatch,getState)=>{
      dispatch(this.MINUS_NUM(payload))
      // console.log(getState().Counter)
    }
  }
}

