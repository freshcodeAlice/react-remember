import React from "react";


class CalculateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           dollar: 0,
           hrivna: 0,
        }
    }


    handleInput = (event) => {
        const {name, value} = event.target;
                this.setState({
                    [name]: value
                });
        }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const {isEmailValid} = this.state;
        return(
            <form className="form-container" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.email} name="dollar" onChange={this.handleInput} />
                <input type="text" value={this.state.password} name="hrivna"  onChange={this.handleInput}/>
                <button type="submit">Click me!</button>
            </form>
        )
    }
}

export default CalculateForm;