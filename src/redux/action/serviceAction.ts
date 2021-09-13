import { fetchUtil } from "../../utils/fetchUtils"
import { store } from "../store"

export const FETCH_TOP_STORIES_IDS = "FETCH_TOP_STORIES_IDS"
export const FETCH_NEW_STORIES_IDS = "FETCH_NEW_STORIES_IDS"
export const FETCH_BEST_STORIES_IDS = "FETCH_BEST_STORIES_IDS"
export const FETCH_JOB_STORIES_IDS = "FETCH_JOB_STORIES_IDS"
export const getIds = (type: any) => (dispatch: (arg0: { type: any; payload: any }) => void, getState: any) => {
    let url = `${type.url}?print=pretty`;
    return fetchUtil({
        url,
        method: `GET`
    }).then((response) => {
        dispatch({
            type: type.actionType,
            payload: response
        })
    }).catch((err) => {
        return Promise.reject(err);
    })
}
export const FETCH_TOP_STORIES_DATA = "FETCH_TOP_STORIES_DATA"
export const getTopStoriesData = (page = 1, limit = 15) => (dispatch: any, getState: () => { (): any; new(): any; serviceReducer: any }) => {
    page = page - 1;
    debugger
    let serviceData = getState().serviceReducer;
    let Ids = serviceData['topStoriesId'].splice(page * limit, limit);
    if (Ids && Ids.length) {
        let reducerObj: any = {};
        Ids.map((eachId: number, index: number) => {
            let url = `/item/${eachId}.json?print=pretty`
            return fetchUtil({
                url,
                method: `GET`
            }).then((response) => {
                reducerObj[eachId] = response;
                if (Ids.length === index + 1) {
                    dispatch({
                        type: FETCH_TOP_STORIES_DATA,
                        payload: reducerObj
                    })
                }
            }).catch((err) => {
                return Promise.reject(err);
            })
        })
    }
}
export const FETCH_NEW_STORIES_DATA = "FETCH_NEW_STORIES_DATA"
export const getNewStoriesData = (page = 1, limit = 15) => (dispatch: any, getState: () => { (): any; new(): any; serviceReducer: any }) => {
    page = page - 1;
    let serviceData = getState().serviceReducer;
    let Ids = serviceData['newStoriesId'].splice(page * limit, limit);
    if (Ids && Ids.length) {
        let reducerObj: any = {};
        Ids.map((eachId: number, index: number) => {
            let url = `/item/${eachId}.json?print=pretty`
            return fetchUtil({
                url,
                method: `GET`
            }).then((response) => {
                reducerObj[eachId] = response;
                if (Ids.length === index + 1) {
                    dispatch({
                        type: FETCH_NEW_STORIES_DATA,
                        payload: reducerObj
                    })
                }
            }).catch((err) => {
                return Promise.reject(err);
            })
        })
    }
}
export const FETCH_BEST_STORIES_DATA = "FETCH_BEST_STORIES_DATA"
export const getBestStoriesData = (page = 1, limit = 15) => (dispatch: any, getState: () => { (): any; new(): any; serviceReducer: any }) => {
    page = page - 1;
    let serviceData = getState().serviceReducer;
    let Ids = serviceData['bestStoriesId'].splice(page * limit, limit);
    if (Ids && Ids.length) {
        let reducerObj: any = {};
        Ids.map((eachId: number, index: number) => {
            let url = `/item/${eachId}.json?print=pretty`
            return fetchUtil({
                url,
                method: `GET`
            }).then((response) => {
                reducerObj[eachId] = response;
                if (Ids.length === index + 1) {
                    dispatch({
                        type: FETCH_BEST_STORIES_DATA,
                        payload: reducerObj
                    })
                }
            }).catch((err) => {
                return Promise.reject(err);
            })
        })
    }
}
export const FETCH_JOB_STORIES_DATA = "FETCH_JOB_STORIES_DATA"
export const getJobStoriesData = (page = 1, limit = 15) => (dispatch: any, getState: () => { (): any; new(): any; serviceReducer: any }) => {
    page = page - 1;
    let serviceData = getState().serviceReducer;
    let Ids = serviceData['jobStoriesId'].splice(page * limit, limit);
    if (Ids && Ids.length) {
        let reducerObj: any = {};
        Ids.map((eachId: number, index: number) => {
            let url = `/item/${eachId}.json?print=pretty`
            return fetchUtil({
                url,
                method: `GET`
            }).then((response) => {
                reducerObj[eachId] = response;
                if (Ids.length === index + 1) {
                    dispatch({
                        type: FETCH_JOB_STORIES_DATA,
                        payload: reducerObj
                    })
                }
            }).catch((err) => {
                return Promise.reject(err);
            })
        })
    }
}
