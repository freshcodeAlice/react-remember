import React from "react";
import sad from './sad.png';
import smile from './smile.png';
import './Switcher.css';

class Switcher extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mood: true,
            moodText: 'smile',
        }
    }


    clickHander = () => {
        this.setState({
            mood: !this.state.mood,
            moodText: this.state.moodText === 'smile' ? 'sad' : 'smile'
        });
        this.props.changeParentBackground();
    }

    render() {
        const {moodText, mood} = this.state;
        const {bgColor} = this.props;
        const moodPic = mood ? smile : sad;
        const cn = `switcher-container ${bgColor}`;
  
        return (
            <div className={cn}>
                <img src={moodPic}/>
                <h1>I am {moodText}</h1>
                <button onClick={this.clickHander}>Click me!</button>
            </div>
        )
    }
}

export default Switcher



// Три типа взаимодействия компонент
// Parent -> Child - props
// Child -> Parent - callback
// Child -> Child (Sibling) - Parent