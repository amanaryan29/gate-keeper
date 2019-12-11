import axios from "axios";
import Cookies from "js-cookie";

module.exports.openGateKeeper(baseURL, loginURL, cookieName) {
    const getCookie = key => Cookies.get(key);
    const Authorization = getCookie(cookieName);
    let headers = {};
    if (Authorization) {
        headers.Authorization = Authorization;
    }

    const apiClient = axios.create({
        baseURL: baseURL,
        timeout: 10000,
        headers
    });

    apiClient.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response.status === 401) {
                window.location = loginURL;
            } else {
                return error;
            }
        }
    );
}