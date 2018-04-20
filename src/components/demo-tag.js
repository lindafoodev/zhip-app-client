import React from 'react';
import {connect} from 'react-redux';

export function DemoTag(props) {
    return (
        <div className="tag">For Demo, Zhip ID<br/> 5ad92c38e74c8b078c901c9d</div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DemoTag);
