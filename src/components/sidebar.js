import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';

import '../css/sidebar.css';


export class Sidebar extends React.Component {
    logOut(){
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render(){
        let logOutButton;
        if (this.props.loggedIn){
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="sidebar sidebar-left">
                <div className='application-name'>
                    Zhip
                </div>
                <nav className="menu">
                    <ul className="menu-list">
                        <li key="app-home" className="app-home menu-list-item">
                            <Link to={`/home`} className='link'>
                                Home
                            </Link>
                        </li>
                        <li key="initiate-transaction" className="initiate-transaction menu-list-item ">
                            <Link to={`/create`} className='link'>
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
                        <li key="log-out" className="show-activity menu-list-item ">
                            {logOutButton}
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Sidebar);
