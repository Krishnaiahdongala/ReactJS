import { Component } from "react";



class UpdatingPhase extends Component {

    render() {

        return (
            <>

                <h2>UpdatingPhase</h2>
                <Header color={"green"} />
            </>
        )
    }
}
export default UpdatingPhase


class Header extends Component {

    constructor() {
        super()
        this.state = {
            favouritecolor: "red",
            count: 0

        }
    }

    static getDerivedStateFromProps(props, state) {

        return { favouritecolor: props.color }
    }

    ChangeColor= () => {

        this.setState({ 
            favouritecolor: "yellow",
        })
    }

    handleClick = () => {

        this.setState({ 
           count:this.state.count+1
        })
    }

    shouldComponentUpdate() {
        return true
    }

    // componentDidMount() {
    //     document.title = `hello ${this.state.count}`
    // }
    // componentDidUpdate() {
    //     document.title = `hello ${this.state.count}`
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
              
        console.log("prevProp------->",prevProps,"prevState------->",prevState);
          
              
    }

    render() {

        return (
            <>
                <h2 style={{ color: this.state.favouritecolor }}>the color is {this.state.favouritecolor}</h2>
                <span>{this.state.count}</span>
                <button onClick={this.ChangeColor}>ChangeColor</button>
                <button onClick={this.handleClick}>UpdateCount{this.state.count}</button>
            </>

        )

    }
}