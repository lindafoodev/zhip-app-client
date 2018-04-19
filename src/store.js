
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import appReducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    appReducer: appReducer
  }),
  composeWithDevTools(),
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if(authToken){
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;