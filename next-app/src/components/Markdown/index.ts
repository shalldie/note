import dynamic from 'next/dynamic';

export const Markdown = dynamic(() =>
    import(
        /* webpackChunkName: "markdown" */
        './Markdown'
    ).then(n => n.default)
);
