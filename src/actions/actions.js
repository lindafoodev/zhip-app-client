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

//works
export const initiateTransaction = values => dispatch => {
  dispatch(transactionActionRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/transaction/send`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      "content-type": "application/json"
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

//works
const updateInitiatorAccount = values => dispatch => {
  dispatch(accountActionRequest());
  fetch(`${REACT_APP_API_BASE_URL}/account/send`, {
    method: 'PUT',
    body: JSON.stringify(values),
    headers: {
      "content-type": "application/json"
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


//works
export const claimTransaction = (values, transactionId) => dispatch => {
  dispatch(transactionActionRequest());
  fetch(`${REACT_APP_API_BASE_URL}/transaction/receive/${transactionId}`, {
    method: 'PUT',
    body: JSON.stringify(values),
    headers: {
      "content-type": "application/json"
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

//works
const updateClaimerAccount = values => dispatch => {
  dispatch(accountActionRequest());
  fetch(`${REACT_APP_API_BASE_URL}/account/receive/${values._id}`, {
    method: 'PUT',
    body: JSON.stringify(values),
    headers: {
      "content-type": "application/json"
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

//works
export const fetchBalance = values => dispatch => {
  dispatch(accountActionRequest());
  console.log('what is in my values', values);
  fetch(`${REACT_APP_API_BASE_URL}/user/balance/${values.userId}`, {
    method: 'GET',
    headers: {
      "Accept": "application/json"
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

//works
export const fetchTransactions = values => dispatch => {
  dispatch(activityActionRequest());
  fetch(`${REACT_APP_API_BASE_URL}/activity/${values.userId}`, {
    method: 'GET',
    headers: {
      "Accept": "application/json"
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