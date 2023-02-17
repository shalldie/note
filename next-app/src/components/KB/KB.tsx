import {KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarResults, KBarSearch} from 'kbar';
import React from 'react';

export const KB: React.FC<React.PropsWithChildren> = ({children}) => {
    const actions = [
        {
            id: 'blog',
            name: 'Blog',
            shortcut: ['b'],
            keywords: 'writing words',
            perform: () => (window.location.pathname = 'blog')
        },
        {
            id: 'contact',
            name: 'Contact',
            shortcut: ['c'],
            keywords: 'email',
            perform: () => (window.location.pathname = 'contact')
        }
    ];

    return (
        <KBarProvider actions={actions}>
            <KBarPortal>
                <KBarPositioner>
                    <KBarAnimator>
                        <KBarSearch />
                    </KBarAnimator>
                </KBarPositioner>
            </KBarPortal>
            {children}
        </KBarProvider>
    );
};
