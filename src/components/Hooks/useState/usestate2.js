import axios from "axios"
import { useState } from "react"





const UseState2=()=>{
      
          const[data,setData]=useState([])
          const[timer,setTimer]=useState(0)

     const  handleClick=()=>{
             
               axios.get("https://fakestoreapi.com/products")
               .then(response=>setData(response.data))
               .catch(err=>alert(err.message))
               
     }

     const handleTimer=()=>{
            
            setInterval(() => {
                   
                setTimer(prevState=>prevState+1)

            },1000);
     }

     
     const handleReset=()=>{
            
        setInterval(() => {
               
            setTimer(timer+1)

        },1000);
 }


        return(
             
            <>
              <h2>UseState2</h2> 
             
              <button onClick={handleClick}>Click to load Data</button>
               
               <h2>timer--{timer}</h2>
              <button onClick={handleTimer}>StartTimer</button>
              <button onClick={handleReset}>reset</button>




            {
                 data.length>0?data.map((element)=>{
                        return(
                          
                            <>
                              <h5>{element.title}</h5>
                            </>
                    
                        )
                 })
                 :
                 null
            }

            </>
        )
}
export default UseState2