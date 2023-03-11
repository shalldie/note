import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';

import dynamic from 'next/dynamic';

const ClientTooltip = dynamic(
    () =>
        import(
            /* webpackChunkName: "react-tooltip" */
            'react-tooltip'
        ).then(n => n.Tooltip),
    { ssr: false }
);

export const TooltipPlugin: React.FC = () => {
    return <ClientTooltip anchorSelect=".tooltip" style={{ zIndex: 999 }} />;
};
