import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {firstTimeUser} from '../actions/users';

export class Dashboard extends React.Component{
    componentDidMount(){
        this.props.dispatch(firstTimeUser());
    }

    render(){
    // If user is new
        if (this.props.loggedIn && this.props.isFirstTimeUser) {
            return (
                <section className='dashboard'>
                    <div className='application-name'>Zhip</div>
                    <div className='direction'>
                        <p className='attention-stmt'>Success!</p>
                        <p>Here is your secured Zhip ID.</p>
                        <p className='attention-stmt'>Zhip ID: {this.props.id}</p>
                        <p>This is your starting account balance.</p>
                        <p>Account Balance: {this.props.accountBalance}</p>
                        <p className='attention-stmt'>Safeguard your new Zhip ID!</p>
                        <p>For security, your Zhip ID will only be presented here once.</p>
                        <p>You can use your Zhip ID to create IOUs or claim IOUs from other Zhip users without needing to login!</p>
                    </div>
                    <div id="dashboard">
                        <div className='modified-redirect'>
                            <Link to="/initiate"><button type="submit">Create IOU</button></Link>
                        </div>
                    </div>
                </section>
            );
        }
        // If user is not new
        return (
            <section className='dashboard'>
                <div className='intro-message'>Welcome back!</div>
                <div id="dashboard">
                    <div className='modified-redirect'>
                        <Link to="/initiate"><button type="submit">Create IOU</button></Link>
                    </div>
                </div>
                <div id="dashboard">
                    <div className='modified-redirect'>
                        <Link to="/balance"><button type="submit">Check IOU Balance</button></Link>
                    </div>
                </div>
                <div id="dashboard">
                    <div className='modified-redirect'>
                        <Link to="/activity"><button type="submit">Check IOU Activity</button></Link>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    loggedIn: currentUser.currentUser !== null,
    id: currentUser.id,
    isFirstTimeUser: currentUser.isFirstTimeUser,
    accountBalance: currentUser.accountBalance
  }
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
