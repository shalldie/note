import React from 'react';
import classNames from 'classnames';

export const MobileBar: React.FC<IClassName & { light: boolean }> = props => {
    return (
        <div className={classNames(props.className, props.light ? 'text-white' : '', 'h-12 text-right')}>
            <i className="fa-solid fa-bars text-[32px] mr-2 mt-2"></i>
        </div>
    );
};
