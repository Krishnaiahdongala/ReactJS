import { useState } from "react"
import UseState2 from "./usestate2";






const UseState1=()=>{

         const[count,SetCount]=useState(0);

   const  handleIncrement=()=>{
               
            //   SetCount(count+1)
                //    (or)
              SetCount(state=>state+1)
               
         }
      
      return(
           
          <>
            
            <h1>counter--- {count}</h1>
              <button onClick={handleIncrement}>Increment</button>
              <UseState2/>
          </>
      )
}
export default UseState1