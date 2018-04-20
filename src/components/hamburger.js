import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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

    if (props.loggedIn) {
      return (
        <div className="hamburger-nav" onClick={props.menuClicked}>
          <div className="hamburger">
            <div className="hamburger-stripe"></div>
            <div className="hamburger-stripe"></div>
            <div className="hamburger-stripe"></div>
          </div>
          <div className="sidebar sidebar-left" style={Object.assign({}, style.base, style.link)}>
                <div className='application-name'>
                    Zhip
                </div>
                <nav className="menu">
                    <ul className="menu-list">
                        <li key="initiate-transaction" className="initiate-transaction menu-list-item ">
                            <Link to={`/initiate`} className='link'>
                                New IOU
                            </Link>
                        </li>
                        <li key="show-balance" className="show-balance menu-list-item ">
                            <Link to={`/balance`} className='link'>
                                IOU Balance
                            </Link>
                        </li>
                        <li key="show-activity" className="show-activity menu-list-item ">
                            <Link to={`/activity`} className='link'>
                                IOU Activity
                            </Link>
                        </li>
                        <li key="log-out" className="logout menu-list-item ">
                            <Link to={'/logout'} className='link'>
                                <button className='link logout-button' onClick={props.logOutClicked}>Log out</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      );
    }
    return (
      <div className="hamburger-nav" onClick={props.menuClicked}>
          <div className="hamburger">
            <div className="hamburger-stripe"></div>
            <div className="hamburger-stripe"></div>
            <div className="hamburger-stripe"></div>
          </div>
        <div className="sidebar sidebar-left" style={Object.assign({}, style.base, style.link)}>
                <div className='application-name'>
                    Zhip
                </div>
                <nav className="menu">
                    <ul className="menu-list">
                        <li key="demo-acct" className="demo-acct menu-list-item ">
                            <button className='link logout-button' onClick={props.demoClicked}>Demo</button>
                        </li>
                        <li key="app-home" className="app-home menu-list-item">
                            <Link to={`/home`} className='link'>
                                Home
                            </Link>
                        </li>
                        <li key="log-in" className="log-in menu-list-item ">
                            <Link to={'/login'} className='link'>
                                Log in
                            </Link>
                        </li>
                        <li key="register" className="register menu-list-item ">
                            <Link to={'/register'} className='link'>
                                Register
                            </Link>
                        </li>
                        <li key="initiate-transaction" className="initiate-transaction menu-list-item ">
                            <Link to={`/create`} className='link'>
                                New IOU
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser !== null,
    }
};

export default connect(mapStateToProps)(Hamburger);
