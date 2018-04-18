import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="landingpage">
            <section className='landingpage'>
                <div className='intro-message'>Welcome to Zhip!</div>
                <div id='new-user'>
                    <p>Send and receive IOUs between you and anyone else without needing their account information.</p>
                    <p>All you need is a secured Zhip account ID.</p>
                    <p className='attention-stmt'>Let's Get Started!</p>
                    <Link to="/register">Register</Link>
                </div>
            </section>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
