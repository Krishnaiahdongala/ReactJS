import { Component } from "react";






class YoutubeButton extends Component {

    state = {
        isSubscribe: false,
        Text1: "Subscribe",
        Text2: "Subscribed"
    }
    handleClick = () => {

        this.setState({

            isSubscribe: !this.state.isSubscribe

        }, ()=>{})
    }

    render() {

        return (

            <>
                <button onClick={this.handleClick} style={{
                    backgroundColor: this.state.isSubscribe ? "green" : "red",
                    color: this.state.isSubscribe ? "black" : "white"
                }} >
                    {this.state.isSubscribe
                        ?
                        this.state.Text2
                        :
                        this.state.Text1}</button>

                {
                    this.state.isSubscribe
                        ?               
                        <h3 className="state">welcome user</h3>
                        :
                        <h3 className="state">please Subscribe</h3>
                }



            </>




        )
    }
}
export default YoutubeButton