import Config from "../config";
import { handleFetchError } from "./errorHandlerUtils";
import { createFormData } from "./imageUploadUtil";

export const fetchUtil = (data) => {
    const { url, method = "GET", token = null, body = null, signal = null, socketUrl = false } = data;
    let headers = { "Content-Type": "application/json", "Accept": "application/json" };
    if (token) {
        headers = { ...headers, Authorization: token };
    }
    return fetch(socketUrl ? `${Config.env()}${url}` : `${Config.env().API_URL}${url}`, {
        method,
        headers,
        body,
        credentials: "include",
        ...(signal && { signal })
    }).then(handleFetchError);
};