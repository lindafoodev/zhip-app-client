import {TRANSACTION_ACTION_REQUEST, TRANSACTION_SUCCESS, TRANSACTION_ERROR, ACCOUNT_ACTION_REQUEST, ACCOUNT_SUCCESS, ACCOUNT_ERROR} from '../actions/actions';

const initialState = {
    transactionAmount: 0,
    accountBalance: 0,
    loading: false,
    error: null,
    transactionId: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
      case TRANSACTION_ACTION_REQUEST: 
        return Object.assign({}, state, {
          loading: true
        })
      case TRANSACTION_SUCCESS:
        return Object.assign({}, state, {
          loading: false,
          error: null,
          transactionAmount: action.transactionAmount,
        })
      case TRANSACTION_ERROR:
        return Object.assign({}, state, {
          loading: false,
          error: action.error
        })
      case ACCOUNT_ACTION_REQUEST: 
        return Object.assign({}, state, {
          loading: true
        })
      case ACCOUNT_SUCCESS:
        console.log('what is action for account success', action);
        return Object.assign({}, state, {
          loading: false,
          error: null,
          accountBalance: action.payload.accountBalance,
          userId: action.payload.userId
        })
      case ACCOUNT_ERROR:
        return Object.assign({}, state, {
          loading: false,
          error: action.error
        })
      default:
        return state
    }
}
     