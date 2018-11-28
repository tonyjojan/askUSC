import Header from './Header';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAttendance } from '../actions';

class Questions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [{data:"hello"}],
      error: null
    }
  }
  renderQuestions(){
    if(this.props.questions === undefined || this.props.questions.length == 0){
      return;
    }
    else{
    return this.props.questions.map(questions => {
      return (
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <p>{questions.data}</p></div><div className="card-action"><a href="#">This is a link</a></div></div></div>

      );
    });}
  }
  componentDidMount(){
    this.ws = new WebSocket('ws://fierce-savannah-23542.herokuapp.com/chatWS/0808/ABCD')
    this.ws.onmessage = e => {this.setState({ questions: this.state.questions.concat([Object.values(JSON.parse(e.data))]) });
                              this.forceUpdate();
                            console.log("question");
                            document.querySelector("#questionsDiv").innerHTML+='<div class="card-panel blue-grey lighten-5">'
      + ' <span className="">' + (JSON.parse(e.data)).data + '</span></div>' ;
                          console.log((JSON.parse(e.data)).data);}
    this.ws.onerror = e => this.setState({ error: 'WebSocket error' })
    this.ws.onclose = e => !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` })
  }
  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    return (
      <div className="container">
      <Header />
        <div id="questionsDiv">
        </div>
      </div>
    );
  }
}

export default Questions;
