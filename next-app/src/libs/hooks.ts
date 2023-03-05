import {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {isServer} from './utils';

export const useTryLayoutEffect = !isServer ? useLayoutEffect : useEffect;

export const useLoad = () => {
    const [loaded, setLoaded] = useState(false);
    useTryLayoutEffect(() => {
        setLoaded(true);
    }, []);
    return loaded;
};

export const useParentSize = (cur: React.RefObject<HTMLElement>) => {
    const [state, setState] = useState({width: 0, height: 0});

    const handler = useCallback(() => {
        setState({
            width: cur.current?.parentElement?.clientWidth || 0,
            height: cur.current?.parentElement?.clientHeight || 0
        });
    }, [cur]);

    useEffect(() => {
        handler();
        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        };
    }, [handler]);

    return state;
};
