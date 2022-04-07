import React from "react";


class CalculateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           dollar: "",
           hrivna: "",
           direction: 'dINh'
        }
        this.koefficient = 29.40;
    }


    handleInput = (event) => {
        const {name, value} = event.target;
                this.setState({
                    [name]: value,
                });
        }

    handleSubmit = (event) => {
        event.preventDefault();
        this.calculateMoney();
    }

    calculateMoney = () => {
        const {dollar, hrivna, direction} = this.state;
        if(direction === 'hINd') {
            const summaInDollars = Math.floor(hrivna / this.koefficient);
            this.setState({
                dollar: summaInDollars
            });
        } else if (direction === 'dINh') {
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
                <select value={this.state.direction} onChange={this.handleInput} name="direction">
                    <option value='dINh'>Dollar in Hrivna</option>
                    <option value='hINd'>Hrivna in Dollar</option>
                </select>
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