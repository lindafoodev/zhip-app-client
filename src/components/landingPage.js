import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <section className='landingpage'>
            <div className='intro-message'>Welcome to Zhip!</div>
            <div className='direction'>
                <p>Join Zhip today to start sending and receiving IOUs between you and anyone else without needing their account information.</p>
                <p>All you need to do is register and get a free secured Zhip ID.</p>
                <p className='attention-stmt'>Let's Get Started!</p>
            </div>
            <div id="landingpage">
                <div className='modified-redirect'>
                    <Link to="/register"><button type="submit">Register</button></Link>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
