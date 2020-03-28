import React, {Component} from "react";

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    Increment() {
        /*this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('>>> ', this.state.count)
        })*/

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => {
            console.log(">>> ", this.state.count)
        })
    }

    IncrementFive() {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.IncrementFive()}>Add</button>
            </div>
        )
    }
}

export default Counter