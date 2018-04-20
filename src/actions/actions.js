import {REACT_APP_API_BASE_URL} from '../config';

export const TRANSACTION_ACTION_REQUEST = 'TRANSACTION_ACTION_REQUEST';
export const transactionActionRequest = () => ({
  type: TRANSACTION_ACTION_REQUEST,
});

export const TRANSACTION_SUCCESS = 'TRANSACTION_SUCCESS';
export const transactionSuccess = (transaction) => ({
  type: TRANSACTION_SUCCESS,
  payload: {transactionAmount: transaction.transactionAmount, transactionId: transaction._id}
});

export const TRANSACTION_ERROR = 'TRANSACTION_ERROR';
export const transactionError = () => ({
  type: TRANSACTION_ERROR,
});

export const ACCOUNT_ACTION_REQUEST = 'ACCOUNT_ACTION_REQUEST';
export const accountActionRequest = () => ({
  type: ACCOUNT_ACTION_REQUEST,
});

export const ACCOUNT_SUCCESS = 'ACCOUNT_SUCCESS';
export const accountSuccess = (account) => ({
  type: ACCOUNT_SUCCESS,
  payload: {accountBalance: account.accountBalance, userId: account._id}
});

export const ACCOUNT_ERROR = 'ACCOUNT_ERROR';
export const accountError = () => ({
  type: ACCOUNT_ERROR,
});

export const ACTIVITY_ACTION_REQUEST = 'ACTIVITY_ACTION_REQUEST';
export const activityActionRequest = () => ({
  type: ACTIVITY_ACTION_REQUEST,
});

export const ACTIVITY_SUCCESS = 'ACTIVITY_SUCCESS';
export const activitySuccess = (transaction) => ({
  type: ACTIVITY_SUCCESS,
  payload: {transactionsList: transaction}
});

export const ACTIVITY_ERROR = 'ACTIVITY_ERROR';
export const activityError = () => ({
  type: ACTIVITY_ERROR,
});

//utilized for when user is not logged in but has a zhip id
export const createTransaction = values => dispatch => {
  dispatch(transactionActionRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/v1/transaction/create`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(updateInitiatorAccount(request)); 
    dispatch(transactionSuccess(request));
    return '2'
  })
  .catch(error => dispatch(transactionError(error)))
}

//utilized when user is logged in, no zhip ID required to be input
export const initiateTransaction = value => (dispatch, getState) => {
  dispatch(transactionActionRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${REACT_APP_API_BASE_URL}/v1/transaction/initiate`, {
    method: 'POST',
    body: JSON.stringify(value),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(updateInitiatorAccount(request)); 
    dispatch(transactionSuccess(request));
    return '2'
  })
  .catch(error => dispatch(transactionError(error)))
}


//updates initiator account when IOU created
const updateInitiatorAccount = values => dispatch => {
  dispatch(accountActionRequest());
  fetch(`${REACT_APP_API_BASE_URL}/v1/account/send`, {
    method: 'PUT',
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(accountSuccess(request))})
  .catch(error => dispatch(accountError(error)))
}


//marks transaction as claimed
export const claimTransaction = (values, transactionId) => dispatch => {
  dispatch(transactionActionRequest());
  fetch(`${REACT_APP_API_BASE_URL}/v1/transaction/claim/${transactionId}`, {
    method: 'PUT',
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(updateClaimerAccount(request));
    dispatch(transactionSuccess(request))})
  .catch(error => dispatch(transactionError(error)))
}

//updates user account for claimed IOU amount
const updateClaimerAccount = values => dispatch => {
  dispatch(accountActionRequest());
  fetch(`${REACT_APP_API_BASE_URL}/v1/account/claim/${values._id}`, {
    method: 'PUT',
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(accountSuccess(request))})
  .catch(error => dispatch(accountError(error)))
}

//fetch user account balance, sign-in required
export const fetchBalance = () => (dispatch, getState) => {
  dispatch(accountActionRequest());
  const authToken = getState().auth.authToken;
  fetch(`${REACT_APP_API_BASE_URL}/v1/balance`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(accountSuccess(request));
  })
  .catch(error => dispatch(accountError(error)))
}

//fetch all user IOU activity (claimed/received) - requires user to be logged in
export const fetchTransactions = () => (dispatch, getState) => {
  dispatch(activityActionRequest());
  const authToken = getState().auth.authToken;
  fetch(`${REACT_APP_API_BASE_URL}/v1/activity`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(activitySuccess(request));
  })
  .catch(error => dispatch(activityError(error)))
}