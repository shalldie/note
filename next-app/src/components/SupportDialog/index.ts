import dynamic from 'next/dynamic';

export const SupportDialog = dynamic(
    () =>
        import(
            /* webpackChunkName: "support-dialog" */
            './SupportDialog'
        ).then(n => n.SupportDialog),
    { ssr: false }
);
