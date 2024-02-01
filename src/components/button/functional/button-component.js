


const ButtonComponent=({buttonProperties})=>{
        
    const {bgcolor,color,width,text}=buttonProperties
      return(
            
      <button style={
        {
            backgroundColor:bgcolor,
            color,
            width
        }
      }>{text}</button>

    )

}
export default ButtonComponent

 {/* <ButtonComponent buttonProperties={{
               text:"login",
               bgcolor:"green",
               color:"white",
                  width:300
       }}/>
       <ButtonComponent  buttonProperties={{
               text:"signup",
               bgcolor:"blue",
               color:"black",
                  width:500
       }}/> */}