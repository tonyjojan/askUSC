import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
      switch (this.props.auth) {
        case null:
          return 'Still deciding';
        case false:
          return <li><a href= "/auth/google">Login With Google</a></li>;
        default:
          return <li><a href="/api/logout">Logout</a></li>;
      }
    }
    render() {
      console.log(this.props);
      return(
        <nav>
          <div className="nav-wrapper" style={{backgroundColor:"#990000"}}>
            <Link
            to={this.props.auth ? '/mainMenu' : '/'}
            className="left brand-logo"
            >
              Askii
            </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      );
    }

}

function mapStateToProps({ auth }){
  return { auth };//
}

/*
function mapStateToProps(state){
  return { auth: state.auth };
}

*/

export default connect(mapStateToProps)(Header);
