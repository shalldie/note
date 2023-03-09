import axios, { AxiosError } from 'axios';
import { isServer } from './utils';

const instance = axios.create({
    baseURL: isServer ? 'https://nosaid.com/api/' : '/api/'
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    (error: AxiosError) => {
        const errData: Partial<IHttpError> = (error.response?.data as any) || {};

        const httpErr: IHttpError = {
            statusCode: errData.statusCode || error.code || 500,
            message: errData.message || error.message || '服务器内部错误'
        };

        return Promise.reject(JSON.stringify(httpErr));
    }
);

export const http = {
    async get<T>(method: string, payload = {}) {
        const { data } = await instance.get<T>(method, {
            params: payload
        });
        return data;
    },
    async post<T>(method: string, payload = {}) {
        const { data } = await instance.post<T>(method, payload);
        return data;
    }
};
