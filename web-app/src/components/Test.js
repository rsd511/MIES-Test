import React, {Component} from 'react';

import './Test.css';

class Test extends Component {

  state = {
    progress : {
      0 : 0, 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, 6 : 0, 7 : 0, 8 : 0, 9 : 0,
    },
    currentPage : 0
  }

  changePage = () => {
    let newProgress = {}

    for(let i = 0; i <= 9; i++) {
      if(i < this.state.currentPage)
        newProgress[i] = 1;
      else
        newProgress[i] = 0;
    }

    this.setState({ progress : newProgress });
  }

  render() {

    let progressSlot = []
    for(let i = 1; i <= 10; i++) progressSlot.push({
      borderColor : this.props.theme.main,
      color : this.props.theme.background,
      backgroundColor : this.props.theme.background
    });
    for(let i = 0; i <= 9; i++) {
      if(this.state.progress[i] === 1) {
        progressSlot[i].color = this.props.theme.main;
        progressSlot[i].backgroundColor = this.props.theme.main;
      }
    }

    let progressLists = []

    for(let i = 0; i <= 9; i++) {
      progressLists.push(
        <li style = {progressSlot[i]} key = {i} >-</li>
      )
    }

    return (
      <div className = "Test" >
        <ul className = "Progress" >
          {progressLists}
        </ul>
        form
      </div>
    );
  }
}

export default Test;