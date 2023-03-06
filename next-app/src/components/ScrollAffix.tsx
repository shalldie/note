import React, {useEffect, useRef, useState} from 'react';
import {useParentSize} from '~/libs/hooks';
import {ResourceLoader} from './ResourceLoader';

export interface IScrollAffixProps extends IClassName {
    enable?: boolean;
    offsetTop?: number;
    maxScrollHeight?: number;
    sectionSelector?: string;
}

export const ScrollAffix: React.FC<React.PropsWithChildren<IScrollAffixProps>> = props => {
    props = {
        enable: true,
        ...props
    };

    const root = useRef<HTMLDivElement>(null);
    const sa = useRef<any>(null);

    const [ready, setReady] = useState(false);
    const {width} = useParentSize(root);

    useEffect(() => {
        if (!props.enable || !ready) {
            return;
        }
        sa.current = new window['ScrollAffix']({
            el: root.current,
            ...props
        });

        return () => {
            sa.current?.dispose?.();
            sa.current = null;
        };
    }, [props, ready]);

    if (!props.enable) {
        return <>{props.children}</>;
    }

    return (
        <>
            <ResourceLoader
                parallelScripts={['https://cdn.jsdelivr.net/npm/scroll-affix@0.0.2/dist/scroll-affix.min.js']}
                onReady={() => setReady(true)}
            />
            <div ref={root} className={props.className} style={{width: width + 'px'}}>
                {props.children}
            </div>
        </>
    );
};
