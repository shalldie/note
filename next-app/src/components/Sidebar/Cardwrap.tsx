import React, { useState } from 'react';
import { SupportDialog } from '../SupportDialog';

export const Cardwrap: React.FC = () => {
    const [dialogOpen, setDialog] = useState(false);

    return (
        <div className="grid grid-cols-2 gap-2">
            <SupportDialog open={dialogOpen} onClose={() => setDialog(false)} />
            <div
                onClick={() => setDialog(true)}
                className="tooltip flex items-center justify-center rounded text-white bg-green-600 cursor-pointer duration bg-opacity-75 h-20 hover:bg-opacity-50 hover:shadow-xl"
                data-tooltip-content="捐赠一杯咖啡"
            >
                <i className="icon fa-solid fa-mug-saucer text-5xl"></i>
            </div>
            <a
                href="https://github.com/shalldie"
                target="_blank"
                rel="noreferrer"
                className="no-underline tooltip flex items-center justify-center rounded text-white bg-blue-500 cursor-pointer duration bg-opacity-75 h-20 hover:bg-opacity-50 hover:shadow-xl"
                data-tooltip-content="去 Github 看看"
            >
                <i className="icon fa-brands fa-github text-5xl"></i>
            </a>
        </div>
    );
};
