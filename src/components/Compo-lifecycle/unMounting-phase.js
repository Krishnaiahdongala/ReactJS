
import { Component } from "react";



class UnMounting extends Component{
       
       constructor(){
           super()
           this.state={
               isVisible:false
           }
       }
     
       handleClick=()=>{

              this.setState({
                  
                   isVisible:!this.state.isVisible
              })
       }
        
      
        render(){

             return(
                <>
                 <h2>Hello Unmounting</h2>
                 <button onClick={this.handleClick}>click to see Child</button>
                  {
                  this.state.isVisible
                  ?
                  <Child/>
                  :
                  null
                  }
                </>
             )
        }
}
export default UnMounting


class Child extends Component{
        
    componentWillUnmount(){
        alert("child removed")
   }
   
        render(){
              
            return(
                 <>
                  
                  <h3>Hello Child</h3>

                 </>
            )
        }
}