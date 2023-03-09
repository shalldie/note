import dynamic from 'next/dynamic';

export const FloatBar = dynamic(
    () =>
        import(
            /* webpackChunkName: "float-bar" */
            './FloatBar'
        ).then(n => n.FloatBar),
    { ssr: false }
);
