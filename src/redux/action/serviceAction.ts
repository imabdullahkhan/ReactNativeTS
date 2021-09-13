import { fetchUtil } from "../../utils/fetchUtils"
import { store } from "../store"

export const FETCH_TOP_STORIES_IDS = "FETCH_TOP_STORIES_IDS"
export const FETCH_NEW_STORIES_IDS = "FETCH_NEW_STORIES_IDS"
export const FETCH_BEST_STORIES_IDS = "FETCH_BEST_STORIES_IDS"
export const FETCH_JOB_STORIES_IDS = "FETCH_JOB_STORIES_IDS"
export const getIds = (type: any) => (dispatch: (arg0: { type: any; payload: any }) => void, getState: any) => {

    let url = `${type.url}?print=pretty`;
    let serviceData = getState().serviceReducer;
    if (serviceData[type.keyName].length) {
        return Promise.resolve(true)
    }
    return fetchUtil({
        url,
        method: `GET`
    }).then((response) => {
      
        dispatch({
            type: type.actionType,
            payload: response
        })
        return Promise.resolve(true)
    }).catch((err) => {
        return Promise.reject(err);
    })
}
export const FETCH_TOP_STORIES_DATA = "FETCH_TOP_STORIES_DATA"
export const LOADING_TOP_STORIES_DATA = "LOADING_TOP_STORIES_DATA"
export const getTopStoriesData = (page = 1, limit = 15) => (dispatch: any, getState: () => { (): any; new(): any; serviceReducer: any }) => {
    dispatch({
        type :LOADING_TOP_STORIES_DATA
    })
    page = page - 1;
    let serviceData = store.getState().serviceReducer as any;
    let Ids = [...serviceData['topStoriesId']].splice(page * limit, limit);
    let responseArray: any = [];
    if (Ids && Ids.length) {
        let IndexId = 0;
        return Ids.map(async (eachId: number, index: number) => {
            console.log(eachId, " EachIds")
            let url = `/item/${eachId}.json?print=pretty`
            await fetchUtil({
                url,
                method: `GET`
            }).then((response) => {
                responseArray[index] = response;
                IndexId = IndexId + 1;
                if (Ids.length === IndexId) {
                    dispatch({
                        type: FETCH_TOP_STORIES_DATA,
                        payload: responseArray
                    })
                }
            }).catch((err) => {
                return Promise.reject(err);
            })
        })
    }
    // dispatch({
    //     type :LOADING_TOP_STORIES_DATA
    // })
    // page = page - 1;
    // let serviceData = getState().serviceReducer;
    // let Ids = serviceData['topStoriesId'].splice(page * limit, limit);
    // if (Ids && Ids.length) {
    //     let reducerObj: any = {};
    //     Ids.map((eachId: number, index: number) => {
    //         let url = `/item/${eachId}.json?print=pretty`
    //         return fetchUtil({
    //             url,
    //             method: `GET`
    //         }).then((response) => {
    //             reducerObj[eachId] = response;
    //             if (Ids.length === index + 1) {
    //                 dispatch({
    //                     type: FETCH_TOP_STORIES_DATA,
    //                     payload: reducerObj
    //                 })
    //             }
    //         }).catch((err) => {
    //             return Promise.reject(err);
    //         })
    //     })
    // }
}
export const FETCH_NEW_STORIES_DATA = "FETCH_NEW_STORIES_DATA"
export const LOADING_NEW_STORIES_DATA = "LOADING_NEW_STORIES_DATA"
export const getNewStoriesData = (page = 1, limit = 15) => (dispatch: any, getState: () => { (): any; new(): any; serviceReducer: any }) => {
    dispatch({
        type :LOADING_NEW_STORIES_DATA
    })
    page = page - 1;
    let serviceData = store.getState().serviceReducer as any;
    let Ids = [...serviceData['newStoriesId']].splice(page * limit, limit);
    let responseArray: any = [];
    if (Ids && Ids.length) {
        let IndexId = 0;
        return Ids.map(async (eachId: number, index: number) => {
            console.log(eachId, " EachIds")
            let url = `/item/${eachId}.json?print=pretty`
            await fetchUtil({
                url,
                method: `GET`
            }).then((response) => {
                responseArray[index] = response;
                IndexId = IndexId + 1;
                if (Ids.length === IndexId) {
                    dispatch({
                        type: FETCH_NEW_STORIES_DATA,
                        payload: responseArray
                    })
                }
            }).catch((err) => {
                return Promise.reject(err);
            })
        })
    }
}
export const FETCH_BEST_STORIES_DATA = "FETCH_BEST_STORIES_DATA"
export const LOADING_BEST_STORIES_DATA= "LOADING_BEST_STORIES_DATA"
export const getBestStoriesData = (page = 1, limit = 15) => (dispatch: any, getState: () => { (): any; new(): any; serviceReducer: any }) => {
    dispatch({
        type :LOADING_BEST_STORIES_DATA
    })
    page = page - 1;
    let serviceData = store.getState().serviceReducer as any;
    let Ids = [...serviceData['bestStoriesId']].splice(page * limit, limit);
    let responseArray: any = [];
    if (Ids && Ids.length) {
        let IndexId = 0;
        return Ids.map(async (eachId: number, index: number) => {
            console.log(eachId, " EachIds")
            let url = `/item/${eachId}.json?print=pretty`
            await fetchUtil({
                url,
                method: `GET`
            }).then((response) => {
                responseArray[index] = response;
                IndexId = IndexId + 1;
                if (Ids.length === IndexId) {
                    dispatch({
                        type: FETCH_BEST_STORIES_DATA,
                        payload: responseArray
                    })
                }
            }).catch((err) => {
                return Promise.reject(err);
            })
        })
    }
}
export const FETCH_JOB_STORIES_DATA = "FETCH_JOB_STORIES_DATA"
export const LOADING_JOB_STORIES_DATA= "LOADING_JOB_STORIES_DATA"
export const getJobStoriesData = (page = 1, limit = 15) => (dispatch: any, getState: () => { (): any; new(): any; serviceReducer: any }) => {
    dispatch({
        type :LOADING_JOB_STORIES_DATA
    })
    page = page - 1;
    let serviceData = store.getState().serviceReducer as any;
    let Ids = [...serviceData['jobStoriesId']].splice(page * limit, limit);
    let responseArray: any = [];
    if (Ids && Ids.length) {
        let IndexId = 0;
        return Ids.map(async (eachId: number, index: number) => {
            console.log(eachId, " EachIds")
            let url = `/item/${eachId}.json?print=pretty`
            await fetchUtil({
                url,
                method: `GET`
            }).then((response) => {
                responseArray[index] = response;
                IndexId = IndexId + 1;
                if (Ids.length === IndexId) {
                    dispatch({
                        type: FETCH_JOB_STORIES_DATA,
                        payload: responseArray
                    })
                }
            }).catch((err) => {
                return Promise.reject(err);
            })
        })
    }
}
