import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const SETUP_USER_ACTION_REQUEST = 'SETUP_USER_ACTION_REQUEST';
export const setupUserActionRequest = () => ({
  type: SETUP_USER_ACTION_REQUEST,
});

export const SETUP_USER_SUCCESS = 'SETUP_USER_SUCCESS';
export const setupUserSuccess = (account) => ({
  type: SETUP_USER_SUCCESS,
  payload: {accountBalance: account.accountBalance, userId: account._id}
});

export const SETUP_USER_ERROR = 'SETUP_USER_ERROR';
export const setupUserError = () => ({
  type: SETUP_USER_ERROR,
});


//works
export const createNewUser = () => dispatch => {
  dispatch(setupUserActionRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/user/new`, {
    method: 'POST',
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(setupUserSuccess(request));
    return '1'
  })
  .catch(error => dispatch(setupUserError(error)))
}





export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
