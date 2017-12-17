import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import AuthReducer from './authReducer';


const rootReducer = combineReducers({
  // state: (state = {}) => state
  auth: AuthReducer,
  form: reduxForm,
});

export default rootReducer;
