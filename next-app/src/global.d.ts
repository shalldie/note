declare interface IHttpError {
    statusCode: number | string;
    message: string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            ['ninja-keys']: KBar;
        }
    }
}
