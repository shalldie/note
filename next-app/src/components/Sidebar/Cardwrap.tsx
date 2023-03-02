import React from 'react';

export const Cardwrap: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-2">
            <div
                className="tooltip flex items-center justify-center rounded text-white bg-green-600 cursor-pointer duration bg-opacity-75 h-20 hover:bg-opacity-50 hover:shadow-xl"
                data-tooltip-content="捐赠一杯咖啡"
            >
                <i className="icon fa-solid fa-mug-saucer text-5xl"></i>
            </div>
            <div
                className="tooltip flex items-center justify-center rounded text-white bg-blue-500 cursor-pointer duration bg-opacity-75 h-20 hover:bg-opacity-50 hover:shadow-xl"
                data-tooltip-content="去 Github 看看"
            >
                <i className="icon fa-brands fa-github text-5xl"></i>
            </div>
        </div>
    );
};
