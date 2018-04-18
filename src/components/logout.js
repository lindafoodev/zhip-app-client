import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class LogOut extends React.Component {
    logOut(){
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render(){
        return (
          <button className='link' onClick={() => this.logOut()}>Log out</button>
        );
    }
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(LogOut);
