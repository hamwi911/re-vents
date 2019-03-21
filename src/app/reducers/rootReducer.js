import { combineReducers } from "redux";
import testReducer from '../../feature/testarea/testReducer';
import eventReducer from '../../feature/event/eventReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
   form: formReducer,
   test: testReducer,
   events: eventReducer,
});


export default rootReducer;
