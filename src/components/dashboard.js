import React from 'react';
//import {createNewUser} from '../actions/users';
// import {reduxForm} from 'redux-form';
// import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// export class Dashboard extends React.Component{
//   componentDidMount(){
//     console.log('testing wires for Dashboard');
//   }

//   // onSubmit() {
//   //   this.props.dispatch(createNewUser()).then(results => {
//   //     if(results === '1'){
//   //       this.props.history.push('/r')
//   //     }
//   //     return results 
//   //   })
//   // }
  
//   render(){
//     if (props.loggedIn) {
//       return <Redirect to="/dashboard" />;
//   }
//     return (
//       <section className='dashboardpage'>
//       <div className='intro-message'>Hello World, welcome to Zhip!</div>
//         <div id='new-user-form'>
//         <form className='new-user-form' onSubmit={this.props.handleSubmit(() => this.onSubmit())}>
//           <p>Send and receive IOUs between you and anyone else without needing their account information.</p>
//           <p>All you need is a secured Zhip account ID.</p>
//           <p className='attention-stmt'>Let's Get Started!</p>
//           <div className='button-holder'>
//             <button className='form-submit' type="submit">Secure New Account ID</button>
//           </div>
//         </form>
//         </div>
//       </section>
//     );
//   }
// }

// const SmartRouter = withRouter(reduxForm({form: 'newUser'})(Dashboard));

// export default SmartRouter

export function Dashboard(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn && props.isFirstTimeUser) {
    return (
      <section className='dashboard'>
        <div className='intro-message'>Welcome to Zhip!</div>
        <div className='direction'>
            <p>Join Zhip today to start sending and receiving IOUs between you and anyone else without needing their account information.</p>
            <p>All you need to do is register and get a free secured Zhip ID.</p>
            <p className='attention-stmt'>Save your Zhip ID in a secure place!</p>
        </div>
        <div id="dashboard">
            <div className='dashboard-redirect'>
                <Link to="/create"><button type="submit">Create IOU</button></Link>
            </div>
        </div>
      </section>
    );
  }

  return (
      <section className='landingpage'>
          <div className='intro-message'>Welcome back!</div>
          <div className='direction'>
              <p>New IOU: Create a new IOU</p>
              <p>IOU Balance: Check your IOU Balance</p>
              <p>IOU Activity: Check your IOU Activity</p>
          </div>
      </section>
  );
}

const mapStateToProps = state => {
  console.log('what is in state', state);
  return {
  loggedIn: state.auth.currentUser !== null,
  isFirstTimeUser: state.appReducer.isFirstTimeUser
  // isFirstTimeUser: state.user.isFirstTimeUser
  }
};

export default connect(mapStateToProps)(Dashboard);
