import React from 'react';
import {connect} from 'react-redux';
import {fetchTransactions} from '../actions/actions';
import requiresLogin from './requires-login';
import {Link} from 'react-router-dom';

export class ActivityContainer extends React.Component {
   componentWillMount(){
      this.props.dispatch(fetchTransactions());
    }

  render() {
    if(this.props.transactionsList === undefined || this.props.transactionsList.length === 0 ){
        return (
            <div className="activity-section">
                <div className='title'>Activity</div>
                <p>No Activity</p>
                <p className="attention-stmt">Get Started.</p>
                <div id="dashboard">
                    <div className='modified-redirect'>
                        <Link to="/initiate"><button type="submit">Create IOU</button></Link>
                    </div>
                </div>
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
    return {
    transactionsList: state.appReducer.transactionsList,
    }
};

export default requiresLogin()(connect(mapStateToProps)(ActivityContainer));