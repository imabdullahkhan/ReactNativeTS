import { combineReducers } from "redux";
import serviceReducer from './serviceReducer';
const appReducer: any = combineReducers({ serviceReducer: serviceReducer })
export default appReducer;