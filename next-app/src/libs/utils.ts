import {NextPageContext} from 'next';

export const isServer = typeof window === 'undefined';

export function sleep(delay = 0) {
    return new Promise<void>(resolve => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

export function handlePageDispatchProps(payloadAction: any, ctx: NextPageContext) {
    const payload = payloadAction as {error?: {message?: string}};
    // 没错误
    if (!payload.error) {
        return {};
    }
    const returnProps = {
        error: {} as Partial<IHttpError>
    };
    try {
        // 请求的错误
        if (payload.error?.message) {
            const httpErr: IHttpError = JSON.parse(payload.error.message);
            Object.assign(returnProps.error, httpErr);
        }
    } catch (ex: any) {
        // js 逻辑错误
        returnProps.error.message = ex.message || ex;
    } finally {
        if (ctx.res && returnProps.error.statusCode) {
            ctx.res.statusCode = +returnProps.error.statusCode;
        }
        return returnProps;
    }
}

export class RndColor {
    static get colors() {
        const COLORS = ['#4b976a', '#3597db', '#da7d99', '#67636b', '#945fad', '#e48633'];
        return COLORS.slice().sort(() => Math.random() - 0.5);
    }
}
