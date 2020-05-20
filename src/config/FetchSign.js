import axios from "axios"
import store, {History} from "../redux/store";
import {
    ACCESS_TOKEN, API_BASE_URL,
    REFRESH_TOKEN, SET_TOKEN, SUB_SYSTEM_CONTEXT,
} from "./constants";
import {Auth} from "./ClientApiModule";
import {connect} from "react-redux";
import {hideLoading} from "../redux/actions/openActions";
import React from "react";
import {showSnack} from "../redux/actions/snackActions";

class FetchSign {

    //get
    static async readApi(requestObject) {
        //url,reqConfig
        if (localStorage.getItem(ACCESS_TOKEN)) {
            if (store.getState().oauth2Reducer.token.sign === undefined) {
                let token = await Auth.createToken(localStorage.getItem(ACCESS_TOKEN),
                    localStorage.getItem(REFRESH_TOKEN), REFRESH_TOKEN);
                await store.dispatch({type: SET_TOKEN, token: token});//set state
            }

            const signedRequest = await store.getState().oauth2Reducer.token.sign(requestObject);
            return await axios.get(signedRequest.url)
                .then(respons => {
                    return respons;
                }).catch(errors => {
                    hideLoading();
                    this.handleGlobalErrors(errors.response);
                    return errors;
                });
        } else {
            History.push(SUB_SYSTEM_CONTEXT + "/signIn");
        }

    }

    static async readApiByBody(requestObject) {
        //url,reqConfig
        if (localStorage.getItem(ACCESS_TOKEN)) {
            if (store.getState().oauth2Reducer.token.sign === undefined) {
                let token = await Auth.createToken(localStorage.getItem(ACCESS_TOKEN),
                    localStorage.getItem(REFRESH_TOKEN), REFRESH_TOKEN);
                await store.dispatch({type: SET_TOKEN, token: token});//set state
            }

            const signedRequest = await store.getState().oauth2Reducer.token.sign(requestObject);
            return await axios.get(signedRequest.url, signedRequest.data)
                .then(respons => {
                    return respons;
                }).catch(errors => {
                    hideLoading();
                    this.handleGlobalErrors(errors.response);
                    return errors;
                });
        } else {
            History.push(SUB_SYSTEM_CONTEXT + "/signIn");
        }

    }

    //post
    static async createApi(requestObject) {
        //url,data,reqConfig
        if (localStorage.getItem(ACCESS_TOKEN)) {
            if (store.getState().oauth2Reducer.token.sign === undefined) {
                let token = await Auth.createToken(localStorage.getItem(ACCESS_TOKEN),
                    localStorage.getItem(REFRESH_TOKEN), REFRESH_TOKEN);
                store.dispatch({type: SET_TOKEN, token: token});//set state
            }
            const signedRequest = await store.getState().oauth2Reducer.token.sign(requestObject);
            return await axios.post(signedRequest.url, signedRequest.data).then(respons => {
                return respons;
            }).catch(errors => {
                hideLoading();
                this.handleGlobalErrors(errors.response);
                return errors;
            });
        } else {
            History.push(SUB_SYSTEM_CONTEXT + "/signIn");
        }
    }

    //upload
    static async uploadApi(requestObject) {
        //url,data,reqConfig
        if (localStorage.getItem(ACCESS_TOKEN)) {
            if (store.getState().oauth2Reducer.token.sign === undefined) {
                let token = await Auth.createToken(localStorage.getItem(ACCESS_TOKEN),
                    localStorage.getItem(REFRESH_TOKEN), REFRESH_TOKEN);
                store.dispatch({type: SET_TOKEN, token: token});//set state
            }
            const signedRequest = await store.getState().oauth2Reducer.token.sign(requestObject);
            return await axios.post(signedRequest.url, signedRequest.data, signedRequest.config).then(respons => {
                return respons;
            }).catch(errors => {
                hideLoading();
                this.handleGlobalErrors(errors.response);
                return errors;
            });
        } else {
            History.push(SUB_SYSTEM_CONTEXT + "/signIn");
        }
    }

    //put
    static async updateApi(requestObject) {
        //url,data,reqConfig
        if (localStorage.getItem(ACCESS_TOKEN)) {
            if (store.getState().oauth2Reducer.token.sign === undefined) {
                let token = await Auth.createToken(localStorage.getItem(ACCESS_TOKEN),
                    localStorage.getItem(REFRESH_TOKEN), REFRESH_TOKEN);
                store.dispatch({type: SET_TOKEN, token: token});//set state
            }
            const signedRequest = await store.getState().oauth2Reducer.token.sign(requestObject);
            return await axios.put(signedRequest.url, signedRequest.data)
                .then(respons => {
                    return respons;
                }).catch(errors => {
                    hideLoading();
                    this.handleGlobalErrors(errors.response);
                    return errors;
                });
        } else {
            History.push(SUB_SYSTEM_CONTEXT + "/signIn");
        }
    }

    //delete
    static async deleteApi(requestObject) {
        //url,reqConfig
        if (localStorage.getItem(ACCESS_TOKEN)) {
            if (store.getState().oauth2Reducer.token.sign === undefined) {
                let token = await Auth.createToken(localStorage.getItem(ACCESS_TOKEN),
                    localStorage.getItem(REFRESH_TOKEN), REFRESH_TOKEN);
                store.dispatch({type: SET_TOKEN, token: token});//set state
            }
            const signedRequest = await store.getState().oauth2Reducer.token.sign(requestObject);
            return await axios.delete(signedRequest.url)
                .then(respons => {

                    return respons;
                }).catch(errors => {
                    //Modal
                    hideLoading();
                    this.handleGlobalErrors(errors.response);
                    return errors;
                });
        } else {
            History.push(SUB_SYSTEM_CONTEXT + "/signIn");
        }
    }

    static handleGlobalErrors = (response) => {
        function notifyErrorMessages(messages) {
            for (let i = 0; i < messages.length; i++) {
                if (messages[i].message && messages[i].message.length > 0 && messages[i].errorType === 'exception') {
                    if (messages[i].errorCode) {
                        showSnack("خطای رخ داده در سمت سرور (کد خطا: " + messages[i].errorCode + ")", 'error', true, 6000,
                            {
                                content: messages[i].message,
                                title: "اطلاعات بیشتر"
                            });
                    } else {
                        showSnack("خطای رخ داده در سمت سرور (کد خطا: -409-)", 'error', true, 6000,
                            {
                                content: messages[i].message,
                                title: "اطلاعات بیشتر"
                            });
                    }
                } else {
                    showSnack(messages[i].message, 'error', true, 6000);
                }
            }
        }

        if (response && response.data && Array.isArray(response.data)) {

            switch (response.status) {
                case 403://FORBIDDEN for accessDeniedException
                    notifyErrorMessages(response.data);
                    break;

                case 409://CONFLICT which is for unhandled exceptions
                    notifyErrorMessages(response.data);
                    break;

                case 412://PRECONDITION_FAILED which is for handled exceptions
                    notifyErrorMessages(response.data);
                    break;

                case 428://PRECONDITION_REQUIRED which is for custom exception
                    notifyErrorMessages(response.data);
                    break;
            }

        } else if(response && response.data) {

            switch (response.status) {
                case 401://UNAUTHORIZED
                    showSnack("نشست شما منقضی شده است", 'error', true, 6000);
                    //History.push(SUB_SYSTEM_CONTEXT + "/signIn");
                    window.open(`${API_BASE_URL}/oamsso/logout.html?end_url=${SUB_SYSTEM_CONTEXT}`,'_self');
                    break;
            }
        }
    };
}

export default connect()(FetchSign);