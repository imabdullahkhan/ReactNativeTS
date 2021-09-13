import { fetchUtil } from "../../utils/fetchUtils"

export const FETCH_TOP_STORIES_IDS = "FETCH_TOP_STORIES_IDS"
export const getTopStoriesId = () => (dispatch, getState) => {
    let url = `/topstories.json?print=pretty`;
    return fetchUtil({
        url,
        method: `GET`
    }).then((response) => {
        dispatch({
            type: FETCH_TOP_STORIES_IDS,
            payload: response
        })
    }).catch((err) => {
        return Promise.reject(err);
    })
}
export const FETCH_TOP_STORIES_DATA = "FETCH_TOP_STORIES_DATA"
export const getTopStoriesData = (page = 1, limit = 15) => {
    let url = `/topstories.json?print=pretty`;
}