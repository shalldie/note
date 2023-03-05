/**
 * https://github.com/shalldie/scroll-active
 * 需要给内部的元素 data-scroll-active="id"
 */

import React, {useEffect, useRef, useState} from 'react';
import {ResourceLoader} from './ResourceLoader';

export interface IScrollActiveProps extends IClassName {
    activeClass?: string;
    offset?: number;
    hash?: boolean;
}

export const ScrollActive: React.FC<React.PropsWithChildren<IScrollActiveProps>> = props => {
    const root = useRef<HTMLDivElement>(null);
    const sa = useRef<any>(null);

    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!ready) {
            return;
        }
        try {
            sa.current = new window['ScrollActive']({
                el: root.current,
                ...props
            });
        } catch (ex) {
            console.log(ex);
        }

        return () => {
            sa.current?.dispose?.();
            sa.current = null;
        };
    }, [props, ready]);

    return (
        <>
            <ResourceLoader
                parallelScripts={['https://cdn.jsdelivr.net/npm/scroll-active@0.0.9/dist/scroll-active.js']}
                onReady={() => setReady(true)}
            />
            <div ref={root} className={props.className}>
                {props.children}
            </div>
        </>
    );
};
