import { useState } from "react"




const Todo=()=>{
     const[list,setList]=useState([])
    const[input,setInput]=useState("")

  const handleChange=(event)=>{
    setInput(event.target.value);   
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        const newList=[...list,`${input} ${list.length+1}`]
        setList(newList)
    }
  
    const handleRemove=()=>{
         setList([])
    }
    const handleRemoveItem=(index)=>{
        
        const list1=list.filter((item,i)=>i!=index)
        setList(list1)
    }
    return(
       <>
     <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange}/>
     <button type="submit" >
        submit
     </button>
     </form>
    
       <button onClick={handleRemove}>removeAll</button>
    {
        list.length>0? list.map((element,index)=>
        <>
            <ul key={index}>
             <li>
                {element}
             </li>
            </ul>
            <button onClick={()=>handleRemoveItem(index)}>RemoveItem</button>
           </>
    ):<h2>no todo's</h2>
    }
       </>

    )
}
export default Todo

