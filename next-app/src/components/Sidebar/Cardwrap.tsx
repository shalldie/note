import React from 'react';

export const Cardwrap: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-2">
            <div
                className="flex items-center justify-center rounded text-white bg-green-600 cursor-pointer duration bg-opacity-75 hover:bg-opacity-50 h-20 tooltip"
                data-tooltip-content="捐赠一杯咖啡"
            >
                <i className="icon fa-solid fa-mug-saucer text-5xl"></i>
            </div>
            <div
                className="flex items-center justify-center rounded text-white bg-blue-500 cursor-pointer duration bg-opacity-75 hover:bg-opacity-50 h-20 tooltip"
                data-tooltip-content="去 Github 看看"
            >
                <i className="icon fa-brands fa-github text-5xl"></i>
            </div>
        </div>
    );
};
