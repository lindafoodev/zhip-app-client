import React from 'react';
import './App.css';
import LandingPage from './components/landingPage';
import Sidebar from './components/sidebar';
import InitiateForm from './components/initiate-form';
import ClaimForm from './components/claim-form';
import PlaceholderContainer from './components/placeholder-container';
import InitiateTransactionContainer from './components/initiate-transaction-container';
import ClaimTransactionContainer from './components/claim-transaction-container';
import BalanceForm from './components/balance-form';
import BalanceContainer from './components/balance-container';
import ActivityForm from './components/activity-form';
import ActivityContainer from './components/activity-container';
import Dashboard from './components/dashboard';
import LoginForm from './components/login-form';
import LogOut from './components/logout';
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
          <Sidebar />
          <main>
            <Switch>
                  <Redirect exact from="/" to="/home" />
                  <Route exact path="/home" component={LandingPage}/>
                  <Route exact path="/dashboard" component={Dashboard}/>
                  <Route exact path="/register" component={RegistrationPage}/>
                  <Route exact path="/login" component={LoginForm}/>
                  <Route exact path="/r" component={PlaceholderContainer}/>
                  <Route exact path="/create" component={InitiateForm}/>
                  <Route exact path="/it" component={InitiateTransactionContainer}/>
                  <Route exact path="/transaction/receive/:transactionId" component={ClaimForm}/>
                  <Route exact path="/ct" component={ClaimTransactionContainer}/>
                  <Route exact path="/balance" component={BalanceForm}/>
                  <Route exact path="/ab" component={BalanceContainer}/>
                  <Route exact path="/activity" component={ActivityForm}/>
                  <Route exact path="/aa" component={ActivityContainer}/>
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
