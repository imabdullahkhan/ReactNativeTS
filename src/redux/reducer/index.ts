import { combineReducers } from "redux";
import topStoriesReducer from './topStoriesReducer';
import detailReducer from './detailReducer';
const appReducer: any = combineReducers({ topStories: topStoriesReducer ,detail:detailReducer})
export default appReducer;