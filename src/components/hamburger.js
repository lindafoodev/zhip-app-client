import React from 'react';
import {connect} from 'react-redux';

import '../css/hamburger-nav.css';

export function Hamburger(props) {
  let { isOpen } = props;

  let style = {
    base: {
      display: 'none'
    },
    link: {
      display: `${isOpen ? 'block' : 'none'}`,
    }
  };
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
      return (
        <div className="hamburger-nav" onClick={props.menuClicked}>
          <div className="hamburger">
            <div className="hamburger-stripe"></div>
            <div className="hamburger-stripe"></div>
            <div className="hamburger-stripe"></div>
          </div>
          <nav>
            <ul className="navbar" style={Object.assign({}, style.base, style.link)}>
                <li className="links">
                  <a href="/home">
                    Home
                  </a>
                </li>
                <li className="links">
                  <a href="/initiate">
                    Create IOU
                  </a>
                </li>
            </ul>
          </nav>
        </div>
      );
    }
    return (
    <div className="hamburger-nav"></div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Hamburger);
