import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import buyPint from './buy-pint-reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  buyPint: buyPint
});

export default rootReducer;