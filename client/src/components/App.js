import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';



import Header from './Header';
import Dashboard from './Dashboard';
import Questions from './Questions';
import Attendance from './Attendance';



class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            {/*<Header />*/}
            <Route exact path="/" component={Landing} />
            <Route exact path="/mainMenu" component={Dashboard} />
            <Route path="/mainMenu/questions" component={Questions} />
            <Route path="/mainMenu/attendance" component={Attendance} />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions)(App);
