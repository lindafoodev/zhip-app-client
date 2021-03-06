import React from 'react';
import {connect} from 'react-redux';

export function DemoTag(props) {
    return (
            <div className="tag">For purpose of Demo only, Zhip ID for account:<br/> 5ada279505f6051254052891</div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DemoTag);
