import {TRANSACTION_ACTION_REQUEST, TRANSACTION_SUCCESS, TRANSACTION_ERROR, ACCOUNT_ACTION_REQUEST, ACCOUNT_SUCCESS, ACCOUNT_ERROR, ACTIVITY_ACTION_REQUEST, ACTIVITY_SUCCESS, ACTIVITY_ERROR} from '../actions/actions';
import {FIRST_ACCESS_REQUEST, FIRST_ACCESS_SUCCESS, FIRST_ACCESS_ERROR} from '../actions/users';
const initialState = {
    transactionAmount: 0,
    accountBalance: 0,
    loading: false,
    error: null,
    transactionId: '',
    userId: '',
    transactionsList: [],
    isFirstTimeUser: true
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
          transactionAmount: action.payload.transactionAmount,
          transactionId: action.payload.transactionId
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
        return Object.assign({}, state, {
          loading: false,
          error: null,
          accountBalance: action.payload.accountBalance,
          userId: action.payload.userId,
          isFirstTimeUser: action.payload.isFirstTimeUser
        })
      case ACCOUNT_ERROR:
        return Object.assign({}, state, {
          loading: false,
          error: action.error
        })
      case FIRST_ACCESS_REQUEST: 
        return Object.assign({}, state, {
          loading: true
        })
      case FIRST_ACCESS_SUCCESS:
        return Object.assign({}, state, {
          loading: false,
          error: null,
          isFirstTimeUser: action.payload.isFirstTimeUser,
          userId: action.payload.userId
        })
      case FIRST_ACCESS_ERROR:
        return Object.assign({}, state, {
          loading: false,
          error: action.error
        })
      case ACTIVITY_ACTION_REQUEST: 
        return Object.assign({}, state, {
          loading: true
        })
      case ACTIVITY_SUCCESS:
        return Object.assign({}, state, {
          loading: false,
          error: null,
          transactionsList: action.payload.transactionsList,
        })
      case ACTIVITY_ERROR:
        return Object.assign({}, state, {
          loading: false,
          error: action.error
        })        
      default:
        return state
    }
}
     