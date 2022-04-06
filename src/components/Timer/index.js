import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            count: new Date(0,0,0,0)
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
        const {count} = this.state;
       this.timerId = setInterval(()=>{
            const newDate = new Date(count.setSeconds(count.getSeconds()+1));
            this.setState({
                count: newDate
            })
        }, 1000);

    }

    render(){
        console.log('render');
        const {count} = this.state

        return (
            <>
            <h1>{count.toLocaleTimeString()}</h1>
            <button onClick={this.start}>Start</button>
            </>
        )
    }
}


export default Timer