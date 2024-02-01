import { Component } from "react";






class Image extends Component{

      render(){
           
           return(
            <div>
                <img src={this.props.imageUrl} width={200} height={150}/>
            </div>
           )
      }
      
}
export default Image