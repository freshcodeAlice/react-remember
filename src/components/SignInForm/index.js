import React from "react";
import './SignInForm.css';

class SignInForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
    
        }
    }


    handleInput = (event) => {
        console.log(event.target)
        const {name, value} = event.target;
        this.setState({
             [name]: value
        })
    }


//        const {name, value} = event.target;
        // this.setState({
        //    [event.target.name]:  event.target.value
        // })

    // {
    //     test: 1
    // }
    // const test = 'hello';
    // {
    //     [test]: 5
    // } ==== {
    //     'hello': 5
    // }

    handleSubmit = (event) => {
        event.preventDefault();
console.dir(event.target);
    }

    render() {
        return(
            <form className="form-container" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.email} onChange={this.handleInput} name="email"/>
                <input type="password" value={this.state.password} name="password"  onChange={this.handleInput}/>
                <button type="submit">Click me!</button>
            </form>
        )
    }
}

export default SignInForm;