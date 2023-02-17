import React from 'react';

interface IDynamicComponentProps extends React.PropsWithChildren {
    is: any;
    [key: string]: any;
}

export const DynamicComponent: React.FC<IDynamicComponentProps> = ({is, children, ...props}) => {
    return React.createElement(is, props, children);
};
