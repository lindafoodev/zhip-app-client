import React from 'react';
import {connect} from 'react-redux';
import {fetchBalance} from '../actions/actions';
import requiresLogin from './requires-login';

export class BalanceContainer extends React.Component {
   componentWillMount(){
      this.props.dispatch(fetchBalance());
    }
  
  render() {
    return (
      <section className='balance-form'>
        <div className='balance-details'>
          <p className='attention-stmt'>Current Balance</p>
          <div className='info-container'>
          <p>{this.props.accountBalance}</p>
          </div>
        </div>
      </section>
    );
  }
}  

const mapStateToProps = state => ({
  accountBalance: state.appReducer.accountBalance,
});

export default requiresLogin()(connect(mapStateToProps)(BalanceContainer));