import Header from './Header';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAttendance } from '../actions';

class Questions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      ids: [],
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
    this.ws.onmessage = e => {
                            if(JSON.parse(e.data).type == "NewMessage"){

                            var currentQuestion =  {
                              id:JSON.parse(e.data).messageID,
                              sender:JSON.parse(e.data).sender,
                              data:JSON.parse(e.data).data,
                              voters:JSON.parse(e.data).voters,
                              count: JSON.parse(e.data).voters.length
                            }
                            this.setState({ questions: this.state.questions.concat(currentQuestion)});
                          }else{
                            var currentquestions = this.state.questions;
                            console.log(JSON.parse(e.data));
                            var x;
                            console.log(this.state.questions);
                            for (x=0; x < currentquestions.length; x++) {
                              if(currentquestions[x].id = (JSON.parse(e.data)).messageID){
                                var index = currentquestions[x].voters.indexOf((JSON.parse(e.data)).sender);
                                console.log(index);
                                if(index == -1){
                                  console.log("in if");
                                  currentquestions[x].voters.push((JSON.parse(e.data)).sender);
                                  currentquestions[x].count = currentquestions[x].count + 1;
                                  currentquestions.sort(compare);
                                  this.setState({questions: currentquestions});
                                }else{
                                  currentquestions[x].voters.splice(index, 1);
                                  console.log(currentquestions[x].voters.length);
                                  currentquestions[x].count = currentquestions[x].count - 1;
                                  currentquestions.sort(compare);
                                  this.setState({questions: currentquestions});
                                }
                                }
                                console.log(currentquestions);
                              }
                            }

                        this.render();
                        this.forceUpdate();
                        function compare(a,b) {
                          if (a.count < b.count)
                            return 1;
                          if (a.count > b.count)
                            return -1;
                          return 0;
                        }
                        }
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
        {this.state.questions.map(x => <div class="card-panel blue-grey lighten-5"><span>{x.data}</span><span class="new badge red" data-badge-caption="">{x.count}</span></div>)}
        </div>
      </div>
    );
  }
}

export default Questions;
