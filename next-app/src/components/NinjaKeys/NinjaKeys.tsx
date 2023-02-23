import React, {useEffect, useRef, useState} from 'react';
// import 'ninja-keys';
import dynamic from 'next/dynamic';

const TAG_KEY = 'ninja-keys';

const useNinjaKeys = () => {
    const ninjaKeys = useRef<any>(null);
    useEffect(() => {
        ninjaKeys.current = document.getElementsByTagName(TAG_KEY)[0];
        if (ninjaKeys.current) {
            return;
        }
        ninjaKeys.current = document.createElement(TAG_KEY);
        document.body.append(ninjaKeys.current);
    }, []);
    return ninjaKeys;
};

export const NinjaKeys: React.FC = () => {
    const nk = useNinjaKeys();

    const [hotkeys, setHotkeys] = useState([
        {
            id: 'Home',
            title: 'Open Home',
            hotkey: 'cmd+h',
            mdIcon: 'home',
            handler: () => {
                console.log('navigation to home');
            }
        },
        {
            id: 'Open Projects',
            title: 'Open Projects',
            hotkey: 'cmd+p',
            // mdIcon: 'apps',
            handler: () => {
                console.log('navigation to projects');
            }
        },
        {
            id: 'Theme',
            title: 'Change theme...',
            // mdIcon: 'desktop_windows',
            children: [
                {
                    id: 'Light Theme',
                    title: 'Change theme to Light',
                    // mdIcon: 'light_mode',
                    handler: () => {
                        console.log('theme light');
                    }
                },
                {
                    id: 'Dark Theme',
                    title: 'Change theme to Dark',
                    // mdIcon: 'dark_mode',
                    keywords: 'lol',
                    handler: () => {
                        console.log('theme dark');
                    }
                }
            ]
        }
    ]);

    useEffect(() => {
        import(
            /* webpackChunkName: "ninja-keys" */
            'ninja-keys'
        ).then(() => {
            if (nk.current) {
                nk.current.data = hotkeys;
                // console.log('ojbk');
            }
        });
    }, []);

    return <></>;
};
