import React from "react";
import './SignInForm.css';

class SignInForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            isEmailValid: false
        }
    }


    handleInput = (event) => {
        const {name, value} = event.target;
       
            const verdict = this.validateEmail(event.target);

                this.setState({
                    isEmailValid: verdict,
                    [name]: value
                });
        }

    validateEmail = (target) => {
        const {name, value} = target;
        if(name === "email" && value.length > 6) {
            return true
        } 
        return false
    }


    handleSubmit = (event) => {
        event.preventDefault();
console.dir(event.target);
    }

    render() {
        const {isEmailValid} = this.state;
        return(
            <form className="form-container" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.email} onChange={this.handleInput} name="email" className={isEmailValid ? "validEmail" : "invalidEmail"}/>
                <input type="password" value={this.state.password} name="password"  onChange={this.handleInput}/>
                <button type="submit">Click me!</button>
            </form>
        )
    }
}

export default SignInForm;