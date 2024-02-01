import { useReducer } from "react"


const InitialState={
       
       count:0,
       greeting:"goodMorning"
}

const ReducerFunction=(state,action)=>{
      
        switch(action.Type){
            case"IncrementOne":
                return{...state,count:state.count+1}
                case"DecrementOne":
                   return{...state,count:state.count-1}

            default:
                return state

        }
}

const UseReducer=()=>{
     
    const[currentState,dispatch]=useReducer(ReducerFunction,InitialState)

    const handleClick=()=>{
          
        dispatch({
             
            Type:"IncrementOne"
        })
    }

    return(

        <>

      <p>{currentState.count}</p>
      <h2>{currentState.greeting}</h2>
      <button onClick={handleClick}>updateCount</button>
        </>
    )
}
export default UseReducer