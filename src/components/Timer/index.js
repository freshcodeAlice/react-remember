import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            count: 0
        }

        this.timerId = null;
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');

        if (this.state.count > 10) {
            clearInterval(this.timerId);
            return false;
        }
        return true;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerId);
    }

    start = () => {

       this.timerId = setInterval(()=>{
            console.log('interval');
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);

    }

    render(){
        console.log('render');

        return (
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.start}>Start</button>
            </>
        )
    }
}


export default Timer