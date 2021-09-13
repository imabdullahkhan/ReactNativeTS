import { FETCH_JOB_STORIES_DATA,FETCH_BEST_STORIES_DATA,FETCH_TOP_STORIES_IDS,FETCH_TOP_STORIES_DATA,FETCH_NEW_STORIES_IDS,FETCH_JOB_STORIES_IDS,FETCH_BEST_STORIES_IDS,FETCH_NEW_STORIES_DATA } from "../action/index";
const initialState = {
    topStoriesId: [],
    topStoriesData: {},
    newStoriesId: [],
    newStoriesData: [],
    bestStoriesId: [],
    bestStoriesData: [],
    jobStoriesId: [],
    jobStoriesData: [],

};
export default (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_TOP_STORIES_IDS: {
            return {
                ...state,
                topStoriesId: action.payload
            }
        }
        case FETCH_NEW_STORIES_IDS : {
            return {
                ...state,
                newStoriesId: action.payload
            }
        }
        case FETCH_JOB_STORIES_IDS : {
            return {
                ...state,
                jobStoriesId: action.payload
            }
        }
        case FETCH_BEST_STORIES_IDS : {
            return {
                ...state,
                bestStoriesId: action.payload
            }
        }
        case FETCH_TOP_STORIES_DATA: {
            return {
                ...state,
                topStoriesData: { ...state.topStoriesData, ...action.payload },
            }
        }
        case FETCH_NEW_STORIES_DATA : {
            return {
                ...state,
                newStoriesData: { ...state.newStoriesData, ...action.payload },

            }
        }
        case FETCH_BEST_STORIES_DATA : {
            return {
                ...state,
                bestStoriesData: { ...state.bestStoriesData, ...action.payload },
            }
        }
        case FETCH_JOB_STORIES_DATA : {
            return {
                ...state,
                jobStoriesData: { ...state.jobStoriesData, ...action.payload },
            }
        }
        default: {
            return state;
        }
    }
};