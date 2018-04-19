import React from 'react';
import {connect} from 'react-redux';
import Hamburger from './hamburger';

class HamburgerNav extends React.Component {
    constructor(){
      super();
      this.state = {
        open: false
      };
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
        menuClicked={this.handleClick.bind(this)}/>
      )
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(HamburgerNav);