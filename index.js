import axios from "axios";
import Cookies from "js-cookie";

class ApiWrapper {
    constructor(config) {
        this.baseURL = config.baseURL;
        this.loginURL = config.loginURL;
        this.cookie = config.cookie;
        

        const getCookie = key => Cookies.get(key);
        const Authorization = getCookie(this.cookie);
        let headers = {};

        if (Authorization) {
            headers.Authorization = Authorization;
        } else {
            this.onError()
        }

        this.apiClient = axios.create({
            baseURL: this.baseURL,
            timeout: 10000,
            headers
        })

        this.apiClient.interceptors.response.use(
            response => {
                return response.data;
            },
            error => {
                if (error.response.status > 400) {
                    this.onError();
                } else {
                    return error;
                }
            }
        );
    }
    onError() {
        window.location = this.loginURL;
    }
}

export default ApiWrapper