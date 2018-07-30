import axios from "axios";

export default {

    getRequestType : (requestUrl, callback) => {
        axios.get(requestUrl)
        .then((response) => {
            callback(response);
        });
    },

    postRequestType : (requestUrl, requestPayload, callback) => {
        axios.post(requestUrl, requestPayload)
        .then((response) => {
            callback(response);
        });
    }

}

