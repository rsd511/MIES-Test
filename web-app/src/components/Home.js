import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

class Home extends Component {
  render() {

    let cardColors = {
      backgroundColor : 'white',
      borderColor : this.props.theme.main
    };
    if(this.props.theme.main === 'blue')
    cardColors.backgroundColor = 'rgba(0,0,255,0.25)';
    else if(this.props.theme.main === 'red')
    cardColors.backgroundColor = 'rgba(255,0,0,0.25)';
    else if(this.props.theme.main === 'green')
    cardColors.backgroundColor = 'rgba(0,255,0,0.25)';
    else if(this.props.theme.main === 'orange')
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

    const introColors = {
      backgroundColor : this.props.theme.background,
      borderColor : this.props.theme.main
    };

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
        <div className = "Intro" style = {introColors} >
          <h2 style = {textStyle} > Extraversion </h2>
          <p style = {textStyle} >
            Extraversion (also spelled as extroversion) is the state of primarily obtaining gratification from outside oneself. Extraverts tend to enjoy human interactions and to be enthusiastic, talkative, assertive, and gregarious.
            <br></br> 
            <br></br> 
            Extraverts are energized and thrive off being around other people. They take pleasure in activities that involve large social gatherings, such as parties, community activities, public demonstrations, and business or political groups. They also tend to work well in groups. 
            <br></br>
            <br></br>
            An extraverted person is likely to enjoy time spent with people and find less reward in time spent alone. They tend to be energized when around other people, and they are more prone to boredom when they are by themselves.
          </p>
        </div>
        <div className = "Intro" style = {introColors} >
          <h2 style = {textStyle} > Introversion </h2>
          <p style = {textStyle} >
            Introversion is the state of being predominantly interested in one's own mental self. Introverts are typically perceived as more reserved or reflective. Some popular psychologists have characterized introverts as people whose energy tends to expand through reflection and dwindle during interaction.
            <br></br> 
            <br></br> 
            An introvert is likely to enjoy time spent alone and find less reward in time spent with large groups of people. Introverts are easily overwhelmed by too much stimulation from social gatherings and engagement.
            <br></br> 
            <br></br> 
            They prefer to concentrate on a single activity at a time and like to observe situations before they participate, especially observed in developing children and adolescents. They are more analytical before speaking. 
          </p>
        </div> 
        <div className = "Intro" style = {introColors} >
          <h2 style = {textStyle} > Ambiversion </h2>
          <p style = {textStyle} >
            Although many people view being introverted or extraverted as mutually exclusive, most contemporary trait theories measure levels of extraversion-introversion as part of a single, continuous dimension of personality, with some scores near one end, and others near the halfway mark.
            <br></br> 
            <br></br> 
            Ambiversion is falling more or less directly in the middle. An ambivert is moderately comfortable with groups and social interaction, but also relishes time alone, away from a crowd.
            <br></br> 
            <br></br> 
            In the face of authority or in the presence of strangers, the person may be introverted. However, in the presence of family or close friends, the person may be highly energetic or extraverted.
          </p>
        </div> 
      </div>
    );
  }
};

export default Home;