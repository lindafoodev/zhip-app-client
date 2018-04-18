import { SubmissionError } from 'redux-form';

import { REACT_APP_API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const registerUser = user => dispatch => {
    return fetch(`${REACT_APP_API_BASE_URL}/users`, {
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

export const firstTimeUser = () => (dispatch, getState) => {
    console.log('firstTimeUser dispatched');
    const authToken = getState().auth.authToken;
    fetch(`${REACT_APP_API_BASE_URL}/users/return`, {
        method: 'PUT',
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
    .catch(error => {
        console.error('Error during application access:', error);
    });
}