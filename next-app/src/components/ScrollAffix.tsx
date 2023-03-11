import React, { useEffect, useRef } from 'react';
import { cdn } from '~/libs/cdn';
import { useParentSize } from '~/libs/hooks';

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
    const dispose = () => {
        try {
            sa.current?.dispose();
        } catch {}
    };

    const { width } = useParentSize(root);

    useEffect(() => {
        (async () => {
            if (!props.enable) {
                return;
            }
            const ScrollAffixLib = await System.import(cdn.ScrollAffix).then(n => n.default);
            dispose();
            sa.current = new ScrollAffixLib({
                el: root.current,
                ...props
            });
        })();

        return dispose;
    });

    if (!props.enable) {
        return <>{props.children}</>;
    }

    return (
        <div ref={root} className={props.className} style={{ width: width + 'px' }}>
            {props.children}
        </div>
    );
};
