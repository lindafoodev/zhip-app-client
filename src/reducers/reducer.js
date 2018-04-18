import {TRANSACTION_ACTION_REQUEST, TRANSACTION_SUCCESS, TRANSACTION_ERROR, ACCOUNT_ACTION_REQUEST, ACCOUNT_SUCCESS, ACCOUNT_ERROR, ACTIVITY_ACTION_REQUEST, ACTIVITY_SUCCESS, ACTIVITY_ERROR} from '../actions/actions';
//import {SETUP_USER_ACTION_REQUEST, SETUP_USER_SUCCESS, SETUP_USER_ERROR} from '../actions/users';
const initialState = {
    transactionAmount: 0,
    accountBalance: 0,
    loading: false,
    error: null,
    transactionId: '',
    id: '',
    transactionsList: []
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
          userId: action.payload.userId
        })
      case ACCOUNT_ERROR:
        return Object.assign({}, state, {
          loading: false,
          error: action.error
        })
      // case SETUP_USER_ACTION_REQUEST: 
      //   return Object.assign({}, state, {
      //     loading: true
      //   })
      // case SETUP_USER_SUCCESS:
      //   return Object.assign({}, state, {
      //     loading: false,
      //     error: null,
      //     accountBalance: action.payload.accountBalance,
      //     userId: action.payload.userId
      //   })
      // case SETUP_USER_ERROR:
      //   return Object.assign({}, state, {
      //     loading: false,
      //     error: action.error
      //   })
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
     