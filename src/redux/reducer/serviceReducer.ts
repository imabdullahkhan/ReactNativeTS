import {
    LOADING_TOP_STORIES_DATA, LOADING_NEW_STORIES_DATA,
    LOADING_BEST_STORIES_DATA, LOADING_JOB_STORIES_DATA,
    FETCH_JOB_STORIES_DATA, FETCH_BEST_STORIES_DATA, FETCH_TOP_STORIES_IDS, FETCH_TOP_STORIES_DATA, FETCH_NEW_STORIES_IDS, FETCH_JOB_STORIES_IDS, FETCH_BEST_STORIES_IDS, FETCH_NEW_STORIES_DATA
} from "../action/index";
const initialState = {
    topStoriesId: [],
    topStoriesData: [],
    topStoriesLoading: false,
    newStoriesId: [],
    newStoriesData: [],
    newStoriesLoading: false,
    bestStoriesId: [],
    bestStoriesData: [],
    bestStoriesLoading: false,
    jobStoriesId: [],
    jobStoriesData: [],
    jobStoriesLoading: false,

};
export default (state = initialState, action: any) => {
    switch (action.type) {
        case LOADING_TOP_STORIES_DATA: {
            return {
                ...state,
                topStoriesLoading: true
            }
        }
        case LOADING_NEW_STORIES_DATA: {
            return {
                ...state,
                newStoriesLoading: true
            }
        }
        case LOADING_BEST_STORIES_DATA: {
            return {
                ...state,
                bestStoriesLoading: true
            }
        }
        case LOADING_JOB_STORIES_DATA: {
            return {
                ...state,
                jobStoriesLoading: true
            }
        }
        case FETCH_TOP_STORIES_IDS: {
            return {
                ...state,
                topStoriesId: action.payload
            }
        }
        case FETCH_NEW_STORIES_IDS: {
            return {
                ...state,
                newStoriesId: action.payload
            }
        }
        case FETCH_JOB_STORIES_IDS: {
            return {
                ...state,
                jobStoriesId: action.payload
            }
        }
        case FETCH_BEST_STORIES_IDS: {
            return {
                ...state,
                bestStoriesId: action.payload
            }
        }
        case FETCH_TOP_STORIES_DATA: {
            return {
                ...state,
                topStoriesData: [ ...state.topStoriesData, ...action.payload ],
                topStoriesLoading: false
            }
        }
        case FETCH_NEW_STORIES_DATA: {
            return {
                ...state,
                newStoriesData: [ ...state.newStoriesData, ...action.payload ],
                newStoriesLoading: false
            }
        }
        case FETCH_BEST_STORIES_DATA: {

            return {
                ...state,
                bestStoriesData: [...state.bestStoriesData, ...action.payload],
                bestStoriesLoading: false
            }
        }
        case FETCH_JOB_STORIES_DATA: {
            return {
                ...state,
                jobStoriesData: [...state.jobStoriesData, ...action.payload],
                jobStoriesLoading: false
            }
        }
        default: {
            return state;
        }
    }
};