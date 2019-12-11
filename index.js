import axios from "axios";
import Cookies from "js-cookie";

const config = {
    baseURL: '',
    loginURL: '',
    cookieName: ''
}

function onError() {
    window.location = config.loginURL;
}

const getCookie = key => Cookies.get(key);
const Authorization = getCookie(config.cookieName);
let headers = {};

if (Authorization) {
    headers.Authorization = Authorization;
} else {
    onError()
}


const apiClient = axios.create({
    baseURL: config.baseURL,
    timeout: 10000,
    headers
});


apiClient.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response.status > 400) {
            onError();
        } else {
            return error;
        }
    }
);


function setData(baseURL, loginURL, cookieName) {
    config.baseURL = baseURL;
    config.loginURL = loginURL;
    config.cookieName = cookieName;
}

apiClient.setData = setData

export default apiClient
