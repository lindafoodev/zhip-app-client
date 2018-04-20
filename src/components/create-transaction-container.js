import React from 'react';
import {connect} from 'react-redux';
import CreateTransaction from './create-transaction';

export class CreateTransactionContainer extends React.Component {
    
    render(props) {
        return (
            <div className="transaction-section">
                <CreateTransaction transactionAmount={this.props.transactionAmount} transactionId={this.props.transactionId} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    transactionId: state.appReducer.transactionId,
    transactionAmount: state.appReducer.transactionAmount
});

export default connect(mapStateToProps)(CreateTransactionContainer);