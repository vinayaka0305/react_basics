import React, { useReducer } from 'react'

const ACTION={
    INCREASE:"increase",
    DECREASE:"decrease"
}

const initialState = {count:0};

const reducer = (state,action) =>{
    // console.log(action)
    switch(action.type){
        case ACTION.INCREASE:
            return{count:state.count + 1}
        case ACTION.DECREASE:
            return{count:state.count - 1}
    }
}

const UseReducer = () => {

  const[state,dispatch] = useReducer(reducer,initialState)

  const increcment = ()=>{
    dispatch({type:ACTION.INCREASE})
  }
  const decrecment = ()=>{
    dispatch({type:ACTION.DECREASE})
  }

  return (
    <div>
        <h2>{state.count}</h2>
        <button onClick={increcment}>increcment</button>
        <button onClick={decrecment}>decrecment</button>
    </div>
  )
}

export default UseReducer