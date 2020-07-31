import React, {Component} from 'react';
import './Test.css';
import './Home.css';

import Queries from './Queries';

class Test extends Component {

  state = {
    progress : {
      0 : 0, 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, 6 : 0, 7 : 0, 8 : 0, 9 : 0,
    },
    currentPage : 0,
    age : 1,
    gender : 0,
    response : {},
    pageState : 0,
    result : 0
  }

  componentDidMount() {
    let dummy = {}
    Object.keys(Queries).forEach(key => {
      dummy[key] = 3;
    });
    this.setState({ response : dummy });
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

  changeAnswer = (event) => {
    let dummy = this.state.response;
    dummy[event.target.name] = parseInt(event.target.value)
    this.setState({ response : dummy });
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

  goBack = () => {
    let newpage = this.state.currentPage - 1;
    let newProgress = {}

    for(let i = 0; i <= 9; i++) {
      if(i < newpage)
        newProgress[i] = 1;
      else
        newProgress[i] = 0;
    }

    this.setState({ progress : newProgress });
    this.setState({currentPage : newpage});
  }

  goNext = () => {
    let newpage = this.state.currentPage + 1;
    let newProgress = {}

    for(let i = 0; i <= 9; i++) {
      if(i < newpage)
        newProgress[i] = 1;
      else
        newProgress[i] = 0;
    }

    this.setState({ progress : newProgress });
    this.setState({currentPage : newpage});
  }

  Testing = () => {
    this.setState({ pageState : 1 });
    let features = this.state.response;
    features["gender"] = this.state.gender;
    features["age"] = this.state.age;

    let formData = new FormData();
    formData.append("features", JSON.stringify(features));

    fetch("https://mies-test-classifier.herokuapp.com/predict", {
      method : 'POST',
      body : formData
    })
    .then(response => response.json())
      .then((jsonResponse) => {
        this.setState({ pageState : 2 });
        this.setState({ result : jsonResponse['classification'] });
      });
  }

  render() {

    const basicStyle = {
      color : this.props.theme.main,
      backgroundColor : this.props.theme.background,
      borderColor : this.props.theme.main
    }
    const inverseStyle = {
      color : this.props.theme.background,
      backgroundColor : this.props.theme.main,
      borderColor : this.props.theme.main
    }

    const introColors = {
      backgroundColor : this.props.theme.background,
      borderColor : this.props.theme.main
    };

    const textStyle = { 
      color : this.props.theme.main
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
      );
    }

    let page = [[], [], [], [], [], [], [], [], [], []]
    page[0].push(
      <div key = "basic1" style = {basicStyle} className = "Basic" >
        <label>Your age : </label>
        <input style = {basicStyle} onChange = {this.changeAge} type = "number" value = {this.state.age} min = {1} max = {150} />
      </div>
    );
    page[0].push(
      <div key = "basic2" style = {basicStyle} className = "Basic" >
        <label>Your gender : </label>
        <select style = {basicStyle} onChange = {this.changeGender} value = {this.state.gender}>
          <option value={0}>Rather not say</option>
          <option value={1}>Male</option>
          <option value={2}>Female</option>
          <option value={3}>Other</option>
        </select>
      </div>
    );

    for(let i = 1; i <= 9; i++) {
      let id = i * 10 - 10;
      let ide = id + 9;
      if(i === 9) ide = ide + 1;
      for(let j = id; j <= ide; j++) {
        page[i].push(
          <div key = {Object.keys(Queries)[j]} className = "Question" style = {basicStyle} >
            <label> {Object.values(Queries)[j]} </label>
            <hr style = {basicStyle} ></hr>
            <ul>
              <li>
                <input onChange = {this.changeAnswer} type = "radio" name = {Object.keys(Queries)[j]} value = {1} checked = {this.state.response[Object.keys(Queries)[j]] === 1}  />
                <br></br>
                Disagree
              </li>
              <li>
                <input onChange = {this.changeAnswer} type = "radio" name = {Object.keys(Queries)[j]} value = {2} checked = {this.state.response[Object.keys(Queries)[j]] === 2}  />
                <br></br>
                Slightly disagree
              </li>
              <li>
                <input onChange = {this.changeAnswer} type = "radio" name = {Object.keys(Queries)[j]} value = {3} checked = {this.state.response[Object.keys(Queries)[j]] === 3}  />
                <br></br>
                Neutral
              </li>
              <li>
                <input onChange = {this.changeAnswer} type = "radio" name = {Object.keys(Queries)[j]} value = {4} checked = {this.state.response[Object.keys(Queries)[j]] === 4}  />
                <br></br>
                Slightly agree
              </li>
              <li>
                <input onChange = {this.changeAnswer} type = "radio" name = {Object.keys(Queries)[j]} value = {5} checked = {this.state.response[Object.keys(Queries)[j]] === 5}  />
                <br></br>
                Agree
              </li>
            </ul>
          </div>
        );
      }
    }

    let pageWithState = []

    pageWithState.push(
      <div className = "Test" >
        <div style = {{height : '36px'}} ></div>
        <ul className = "Progress" >
          {progressLists}
        </ul>
        <form onSubmit = {this.submitForm} >
          {
            (this.state.currentPage === 0)
            ? page[0]
            : (this.state.currentPage === 1)
              ? page[1]
              : (this.state.currentPage === 2)
                ? page[2]
                : (this.state.currentPage === 3)
                  ? page[3]
                  : (this.state.currentPage === 4)
                    ? page[4]
                    : (this.state.currentPage === 5)
                      ? page[5]
                      : (this.state.currentPage === 6)
                        ? page[6]
                        : (this.state.currentPage === 7)
                          ? page[7]
                          : (this.state.currentPage === 8)
                            ? page[8]
                            : (this.state.currentPage === 9)
                              ? page[9]
                              : ""
          }
          <ul className = "navigation" style = {basicStyle} >
            <li>
              {
                (this.state.currentPage === 0)
                ? ""
                : <button onClick = {this.goBack} style = {basicStyle} >Back</button>
              }
            </li>
            <li style = {{fontWeight : '600'}} >Be honest!</li>
            <li>
              {
                (this.state.currentPage === 9)
                ? <button type = "button" onClick = {this.Testing} style = {inverseStyle } >Submit</button>
                : <button onClick = {this.goNext} style = {basicStyle} >Next</button>
              }
            </li>
          </ul>
        </form>
      </div>
    );

    pageWithState.push(
      <div className = "TEST" >
        <div style = {{height : '64px'}} ></div>
        <div className = "Intro" style = {introColors} >
          <h2 style = {textStyle} > Classifying... </h2>
          <p style = {textStyle} ></p>
        </div>
      </div>
    );

    pageWithState.push(
      <div className = "TEST" >
        <div style = {{height : '64px'}} ></div>
        {
          (this.state.result === 1)
          ? <div className = "Intro" style = {introColors} >
              <h2 style = {textStyle} > You are an Introvert! </h2>
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
          : (this.state.result === 2)
            ? <div className = "Intro" style = {introColors} >
                <h2 style = {textStyle} > You are an Extrovert! </h2>
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
            : <div className = "Intro" style = {introColors} >
                <h2 style = {textStyle} > You are an Ambivert! </h2>
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
        }
      </div>
    );

    return (pageWithState[this.state.pageState]);
  }
}

export default Test;