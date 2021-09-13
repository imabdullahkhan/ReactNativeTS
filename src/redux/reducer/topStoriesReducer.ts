import { FETCH_TOP_STORIES_IDS } from "../action/index";
const initialState = {
    storiesIds: [],
    storiesData: []
};
export default (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_TOP_STORIES_IDS: {
            return {
                ...state,
                storiesIds : action.payload
            }
        }
        default: {
            return state;
        }
    }
};