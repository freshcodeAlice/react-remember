import React from "react";
import './App.css';
import Switcher from './components/Switcher'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgc: 'smile'
    }
  }

changeBgc = () => {
this.setState({
  bgc: this.state.bgc === 'smile' ? 'sad' : 'smile'
})
}

render() {
  const {bgc} = this.state
  return (
    <div className={bgc}>
      <Switcher bgColor={bgc} changeParentBackground={this.changeBgc}/>
    </div>
  );
}
}

export default App;