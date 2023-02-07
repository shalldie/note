import axios from 'axios';
import {URL} from 'url';
import {isServer} from './utils';

const instance = axios.create({
    baseURL: isServer ? 'https://nosaid.com/api/' : '/api/'
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export const http = {
    async get<T>(method: string, payload = {}) {
        const {data} = await instance.get<T>(method, {
            params: payload
        });
        return data;
    },
    async post<T>(method: string, payload = {}) {
        const {data} = await instance.post<T>(method, {
            data: payload
        });
        return data;
    }
};
