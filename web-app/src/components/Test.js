import React, {Component} from 'react';

import './Test.css';

class Test extends Component {

  state = {
    progress : {
      0 : 0, 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, 6 : 0, 7 : 0, 8 : 0, 9 : 0,
    },
    currentPage : 0,
    age : 1,
    gender : 0
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

  changeAge = (event) => {
    this.setState({
      age : event.target.value
    });
  }

  changeGender = (event) => {
    this.setState({
      gender : event.target.value
    });
  }

  submitForm = (event) => {
    event.preventDefault();
  }

  render() {

    const basicStyle = {
      color : this.props.theme.main,
      backgroundColor : this.props.theme.background,
      borderColor : this.props.theme.main
    }

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
        <form onSubmit = {this.submitForm} >
          <div style = {basicStyle} className = "Basic" >
            <label>Your age : </label>
            <input style = {basicStyle} onChange = {this.changeAge} type = "number" value = {this.state.age} min = {1} max = {150} />
          </div>
          <div style = {basicStyle} className = "Basic" >
            <label>Your gender : </label>
            <select style = {basicStyle} onChange = {this.changeGender} value = {this.state.gender}>
              <option value={0}>Rather not say</option>
              <option value={1}>Male</option>
              <option value={2}>Female</option>
              <option value={3}>Other</option>
            </select>
          </div>
          <div className = "Question" >
            <label> I have to psych myself up before I am brave enough to make a phone call. </label>
            
          </div>
        </form>
      </div>
    );
  }
}

export default Test;