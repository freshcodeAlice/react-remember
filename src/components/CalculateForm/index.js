import React from "react";


class CalculateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           dollar: "",
           hrivna: "",
           valuta: null
        }
        this.koefficient = 29.40;
    }


    handleInput = (event) => {
        const {name, value} = event.target;
                this.setState({
                    [name]: value,
                    valuta: name
                });
        }

    handleSubmit = (event) => {
        event.preventDefault();
        this.calculateMoney();
    }

    calculateMoney = () => {
        const {dollar, hrivna, valuta} = this.state;
        if(valuta === 'hrivna') {
            const summaInDollars = Math.floor(hrivna / this.koefficient);
            this.setState({
                dollar: summaInDollars
            });
        } else if (valuta === 'dollar') {
            const summaInHrivnas = Math.floor(dollar * this.koefficient);
            this.setState({
                hrivna: summaInHrivnas
            });
        } 
    }


    render() {
        return(
            <form className="form-container" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.dollar} name="dollar" onChange={this.handleInput} />
                <input type="text" value={this.state.hrivna} name="hrivna"  onChange={this.handleInput}/>
                <button type="submit">Convert</button>
                <button type="reset">Clear</button>
            </form>
        )
    }
}

export default CalculateForm;




// Parent -> Child -- props
// Child -> Parent -- callback
// Child -> Child -- Parent