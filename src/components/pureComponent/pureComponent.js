import { Component, PureComponent } from "react"





class PureComponentReact extends Component{
         
      constructor(){
            super()
            this.state={
                  count:0
            }
      }
     
     handleIncrement=()=>{
           
          this.setState({
              count:this.state.count+1
          })
     }

    handleDecrement=()=>{
           
        this.setState({
            count:this.state.count-1
        })
   }

   handleReset=()=>{
           
    this.setState({
        count:0
    })
   }
         render(){
              
              return(
                <>
                <h1>Parent {this.state.count}</h1>
                <button onClick={this.handleIncrement}>count increment</button>
                <button onClick={this.handleDecrement}>count decrement</button>
                <button onClick={this.handleReset}>count reset</button>
                <Child1/>
                <Child2/>
                </>
              )
         }
}
export default PureComponentReact


class Child1 extends PureComponent{
      
    render(){
          console.log("child1 render");
          return(
            <>
            <h2>Child1</h2>
            </>
          )
    }
}


class Child2 extends PureComponent{
      
    render(){
        console.log("child2 render");
          return(
            <>
            <h3>Child2</h3>
            </>
          )
    }
}