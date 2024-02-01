import axios from "axios";
import { Component } from "react";
import Image from "./imageapi";


class ProfileApi extends Component {

    state = {
        isData:false,
        products: []
    }
    handleClick = () => {

        axios.get("https://fakestoreapi.com/products")
            .then(Response => {
                if (Response.status == 200) {
                    this.setState(
                        {
                            products: Response.data
                        }
                    )
                } else {    
                    alert("something went wrong")
                }
            })
    }
    render() {

        return (
            <div>   
                <button onClick={this.handleClick}>click to see data</button>

                {
                    this.state.products.length>0&&this.state.products.map((elements) => {
                        return (
                            <div className="card" style={{width:200}}>
                                 <h2 className="card-title">{elements.category}</h2>
                            <img className="card-img-top" src={elements.image} alt="Card image"/>
                            <div className="card-body">
                              <h2 className="card-title">{elements.title}</h2>
                              <h4 className="card-text">{elements.price}</h4>
                          </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default ProfileApi
