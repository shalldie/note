import React from 'react';
import dynamic from 'next/dynamic';

const NonSSRWrapper = props => <>{props.children}</>;

export const NoSSR = dynamic(() => Promise.resolve(NonSSRWrapper), {
    ssr: false
});
