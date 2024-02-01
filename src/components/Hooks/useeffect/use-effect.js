import { useEffect, useState } from "react"





const UseEffect=()=>{

    const[Xposition,setXposition]=useState(0)
    const[Yposition,setYposition]=useState(0)

useEffect(()=>{
       
    document.addEventListener("mousemove",mouseMoveTrack)
    return ()=>{
         document.removeEventListener("mousemove",mouseMoveTrack)
    }
},[])

const mouseMoveTrack=(event)=>{
     
      setXposition(event.clientX)
      setYposition(event.clientY)

}



    return(
        <>

       <h1>hello</h1>
       <p>{Xposition}</p>
       <p>{Yposition}</p>
       


        </>
    )
}
export default UseEffect