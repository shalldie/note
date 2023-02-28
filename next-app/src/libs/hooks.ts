import {useEffect, useLayoutEffect, useState} from 'react';
import {isServer} from './utils';

export const useTryLayoutEffect = !isServer ? useLayoutEffect : useEffect;

export const useLoad = () => {
    const [loaded, setLoaded] = useState(false);
    useTryLayoutEffect(() => {
        setLoaded(true);
    }, []);
    return loaded;
};
