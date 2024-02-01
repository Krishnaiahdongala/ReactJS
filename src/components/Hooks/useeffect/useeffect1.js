import axios from "axios"
import { useEffect, useState } from "react"





const UseEffect1=()=>{

    const[count,setCount]=useState(0)
    const[data,setData]=useState([])
    const[title,setTitle]=useState(0)

      useEffect(()=>{
               
          handleLoad()
          
      },[])

      useEffect(()=>{
               
       document.title=`hello${title}`
        
    },[title])

const handleTitle=()=>{
       
      setTitle(title+1)
}

const handleLoad=()=>{
     
       axios.get("https://fakestoreapi.com/products")
       .then(response=>setData(response.data))

}
const handleClick=()=>{
     
      setCount(count+1)
}

    return(

        <>
        <h1>{count}</h1>
        <button onClick={handleClick}>updateCount</button>
        <h3>{title}</h3>
        <button onClick={handleTitle}>updateTitle</button>
        
        {
           data.map((element)=>{
            return(
            <div key={element.id}>
               <p>{element.title}</p>
               <img src={element.image} style={{width:200,height:150}}/>
            </div>
            )
           })
        }
        </>
    )
}
export default UseEffect1