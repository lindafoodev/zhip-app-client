import React from 'react';
import LandingPage from './components/landingPage';
import Sidebar from './components/sidebar';
import InitiateForm from './components/initiate-form';
import CreateForm from './components/create-form';
import ClaimForm from './components/claim-form';
//import PlaceholderContainer from './components/placeholder-container';
import InitiateTransactionContainer from './components/initiate-transaction-container';
import CreateTransactionContainer from './components/create-transaction-container';
import ClaimTransactionContainer from './components/claim-transaction-container';
import BalanceContainer from './components/balance-container';
import ActivityContainer from './components/activity-container';
import Dashboard from './components/dashboard';
import LoginPage from './components/login-page';
import LogOut from './components/logout';
import HamburgerNav from './components/hamburger-nav';
import {
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';
import {connect} from 'react-redux';
import RegistrationPage from './components/registration-page';
import {refreshAuthToken} from './actions/auth';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
      this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
      this.refreshInterval = setInterval(
          () => this.props.dispatch(refreshAuthToken()),
          60 * 60 * 1000 // One hour
      );
  }

  stopPeriodicRefresh() {
      if (!this.refreshInterval) {
          return;
      }

      clearInterval(this.refreshInterval);
  }

  render(){
    return (
      <div className="app">
          <Sidebar/>
          <HamburgerNav/>
          <main>
            <Switch>
                  <Redirect exact from="/" to="/home" />
                  <Route exact path="/home" component={LandingPage}/>
                  <Route exact path="/dashboard" component={Dashboard}/>
                  <Route exact path="/register" component={RegistrationPage}/>
                  <Route exact path="/login" component={LoginPage}/>
                  <Route exact path="/create" component={CreateForm}/>
                  <Route exact path="/ct" component={CreateTransactionContainer}/>
                  <Route exact path="/initiate" component={InitiateForm}/>
                  <Route exact path="/it" component={InitiateTransactionContainer}/>
                  <Route exact path="/transaction/claim/:transactionId" component={ClaimForm}/>
                  <Route exact path="/ct" component={ClaimTransactionContainer}/>
                  <Route exact path="/balance" component={BalanceContainer}/>
                  <Route exact path="/activity" component={ActivityContainer}/>
                  <Route exact path="/logout" component={LogOut}/>
            </Switch>
          </main>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));


