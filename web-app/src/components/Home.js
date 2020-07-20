import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

class Home extends Component {
  render() {

    let cardColors = {
      backgroundColor : 'white',
      borderColor : this.props.theme.main
    };
    if(this.props.theme.main == 'blue')
    cardColors.backgroundColor = 'rgba(0,0,255,0.25)';
    else if(this.props.theme.main == 'red')
    cardColors.backgroundColor = 'rgba(255,0,0,0.25)';
    else if(this.props.theme.main == 'green')
    cardColors.backgroundColor = 'rgba(0,255,0,0.25)';
    else if(this.props.theme.main == 'orange')
    cardColors.backgroundColor = 'rgba(255,165,0,0.25)';
    else
    cardColors.backgroundColor = 'rgba(128,0,128,0.25)';

    const textStyle = { 
      color : this.props.theme.main
    }
    const buttonStyle = {
      color : this.props.theme.background,
      backgroundColor : this.props.theme.main,
      borderColor : this.props.theme.background
    }

    return (
      <div className = "Home">
        <div className = "Card" style = {cardColors} >
          <h1 style = {textStyle} > MIES-Test </h1>
          <p style = {textStyle} >
            A test to predict & compare your introversion & extroversion!
          </p>
          <Link to = "/test">
            <button style = {buttonStyle} > Take the test <i className="fa fa-chevron-circle-right" aria-hidden="true"></i> </button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Home;