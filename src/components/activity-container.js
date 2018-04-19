import React from 'react';
import {connect} from 'react-redux';
import {fetchTransactions} from '../actions/actions';
import requiresLogin from './requires-login';

export class ActivityContainer extends React.Component {
   componentWillMount(){
      this.props.dispatch(fetchTransactions());
    }

  render() {
    if(this.props.transactionsList === undefined || this.props.transactionsList.length === 0 ){
        return (
            <div className="activity-section">
                <div className='title'>Activity</div>
                <ul className='transactions-list'> No Activity </ul>
            </div>
        );
    }
    const transactions = this.props.transactionsList.map(transaction => (
      <li className='transactions-list-transaction' key={transaction._id}>
          <div className='transaction-container'>
              <div className='transactions-list-transaction-id'><span className='key-name'>IOU ID:</span> {transaction._id}</div>
              <div className='transactions-list-transaction-amount'><span className='key-name'>IOU Amount:</span>{transaction.transactionAmount}</div>
          </div>
      </li>
  ));

  return (
      <div className="activity-section">
          <div className='title'>Activity</div>
          <ul className='transactions-list'> {transactions} </ul>
      </div>
  );
  }
}  

const mapStateToProps = state => {
    console.log('what is in appReducer', state.appReducer.transactionsList)
    return {
    transactionsList: state.appReducer.transactionsList,
    }
};

export default requiresLogin()(connect(mapStateToProps)(ActivityContainer));