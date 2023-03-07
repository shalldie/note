/**
 * https://github.com/shalldie/scroll-active
 * 需要给内部的元素 data-scroll-active="id"
 */

import React, {useEffect, useRef} from 'react';
import {cdn} from '~/libs/cdn';

export interface IScrollActiveProps extends IClassName {
    activeClass?: string;
    offset?: number;
    hash?: boolean;
}

export const ScrollActive: React.FC<React.PropsWithChildren<IScrollActiveProps>> = props => {
    const root = useRef<HTMLDivElement>(null);
    const sa = useRef<any>(null);

    const dispose = () => {
        sa.current?.dispose?.();
    };

    useEffect(() => {
        (async () => {
            const ScrollActiveLib = await System.import(cdn.ScrollActive).then(n => n.default);
            dispose();
            sa.current = new ScrollActiveLib({
                el: root.current,
                ...props
            });
        })();

        return () => {
            dispose();
        };
    });

    return (
        <div ref={root} className={props.className}>
            {props.children}
        </div>
    );
};
