import { combineReducers } from "redux";
import topStoriesReducer from './topStoriesReducer';
const appReducer: any = combineReducers({ topStories: topStoriesReducer })
export default appReducer;