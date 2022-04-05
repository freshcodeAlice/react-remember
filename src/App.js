import React from "react";
import './App.css';
import Switcher from './components/Switcher';
import sad from './components/sad.png';
import smile from './components/smile.png';
import SuccessModalWindow from './components/SuccessModalWindow';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: true,
      moodText: 'smile',
    }
  }

changeBgc = () => {
this.setState({
  moodText: this.state.moodText === 'smile' ? 'sad' : 'smile',
  mood: !this.state.mood
})
}

render() {
  const {moodText, mood} = this.state;
  const moodPic = mood ? smile : sad;
  return (
    <div className={moodText}>
      <Switcher bgColor={moodText} changeParentBackground={this.changeBgc} moodText={moodText} moodPic={moodPic}/>
      <SuccessModalWindow />
    </div>
  );
}
}

export default App;


/*
Hometask: Создать еще одну компоненту, которая отобразит кружочек с зеленой границей и будет менять содержимое в зависимости от того, что отображает компонента Switcher

*/