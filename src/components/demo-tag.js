import React from 'react';
import {connect} from 'react-redux';

export function DemoTag(props) {
    return (
         <section>
            <div className="tag">For purpose of Demo only, Zhip ID for Demo Account:<br/> 5ada279505f6051254052891</div>
            <div className="tag">For purpose of Demo only, Zhip ID to claim an IOU created by Demo Account:<br/> 5b48f934693a4100148c263d</div>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DemoTag);
