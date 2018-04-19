import React from 'react';
import {connect} from 'react-redux';
import InitiateTransaction from './initiate-transaction';

export class InitiateTransactionContainer extends React.Component {
    
    render(props) {
        return (
            <section className="transaction-section">
                <InitiateTransaction transactionAmount={this.props.transactionAmount} transactionId={this.props.transactionId} />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    transactionId: state.appReducer.transactionId,
    transactionAmount: state.appReducer.transactionAmount
});

export default connect(mapStateToProps)(InitiateTransactionContainer);