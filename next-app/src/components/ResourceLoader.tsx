import Script from 'next/script';
import React, {useEffect, useState} from 'react';
import {When} from 'react-if';

export interface IResourceLoaderProps {
    styles?: string[];
    parallelScripts?: string[];
    waterfallScripts?: string[];
    onReady?: () => void;
}

export const ResourceLoader: React.FC<IResourceLoaderProps> = props => {
    props = {
        styles: [],
        parallelScripts: [],
        waterfallScripts: [],
        ...props
    };

    const [pnum, setPNum] = useState(0);
    const [wnum, setWNum] = useState(0);

    useEffect(() => {
        if (wnum + pnum >= props.parallelScripts!.length + props.waterfallScripts!.length) {
            props.onReady?.();
        }
    }, [pnum, wnum, props]);

    return (
        <>
            {props.styles?.map((href, index) => (
                <link rel="stylesheet" href={href} key={`style-${index}`} />
            ))}
            {props.parallelScripts!.map((src, index) => (
                <Script src={src} onReady={() => setPNum(n => n + 1)} key={`pscript-${index}`}></Script>
            ))}
            {props.waterfallScripts!.map((src, index) => (
                <When condition={wnum >= index} key={index}>
                    <Script src={src} onReady={() => setWNum(n => n + 1)} key={`wscript-${index}`}></Script>
                </When>
            ))}
        </>
    );
};
