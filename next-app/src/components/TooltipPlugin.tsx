import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';

// import {Tooltip} from 'react-tooltip';
import dynamic from 'next/dynamic';

const ClientTooltip = dynamic(() => import('react-tooltip').then(n => n.Tooltip), {ssr: false});

export const TooltipPlugin: React.FC = () => {
    return <ClientTooltip anchorSelect=".tooltip" style={{zIndex: 999}} />;
};
