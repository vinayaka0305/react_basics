import React, { useReducer, useState } from 'react'

const ACTION = {
    INCREASE :"increase",
    DECREASE :"decrease"
}

const intialState = {count : 0};

const reducer = (state,action)=>{
    
    switch(action.type){
        case(ACTION.INCREASE):
        return {count : state.count + 1};

        case(ACTION.DECREASE):
        return{count : state.count - 1};

        default:
        return state;
    }
}


const Counter = () => {

  const[state,dispatch] = useReducer(reducer,intialState)

   const increment = ()=>{
        dispatch({type:ACTION.INCREASE})
   }

   const decrement = ()=>{
    dispatch({type:ACTION.DECREASE})
   }


  return (
   <>
    <h2>count :{state.count}</h2>
    <button onClick={increment}>InCrement</button>
    <button onClick={decrement}>DeCrement</button>
   </>
  )
}

export default Counter