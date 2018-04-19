import React from 'react';
import {connect} from 'react-redux';
import Hamburger from './hamburger';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

class HamburgerNav extends React.Component {
    constructor(){
      super();
      this.state = {
        open: false
      };
    }
    logOut(){
      this.props.dispatch(clearAuth());
      clearAuthToken();
  }

    handleClick(){
      this.setState({
        open: !this.state.open
      });
    }
    
    render(){
      return (
      <Hamburger
        isOpen={this.state.open}
        menuClicked={this.handleClick.bind(this)}
        logOutClicked={this.logOut.bind(this)}/>
      )
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(HamburgerNav);