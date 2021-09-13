import Config from "../config";

export const fetchUtil = (data: { url: any; method: any; token?: any; body?: any; signal?: any; socketUrl?: any; }) => {
    const { url, method = "GET", token = null, body = null, signal = null, socketUrl = false } = data;
    let headers = { "Content-Type": "application/json", "Accept": "application/json" };
    return fetch(socketUrl ? `${Config.env()}${url}` : `${Config.env()}${url}`, {
        method,
        headers,
        body,
        credentials: "include",
        ...(signal && { signal })
    }).then((data) => {
        return data.json()
    });
};