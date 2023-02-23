import React from 'react';

import {
    ActionId,
    KBarAnimator,
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarSearch,
    KBarResults,
    useMatches,
    ActionImpl
} from 'kbar';

import {useNavActions, useSearchActions} from './actions';

const searchStyle = {
    padding: '12px 16px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box' as React.CSSProperties['boxSizing'],
    outline: 'none',
    border: 'none',
    background: '#fff',
    color: 'var(--color)'
};

const animatorStyle = {
    maxWidth: '600px',
    width: '100%',
    background: '#fff',
    color: 'var(--color)',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 6px 20px rgb(0 0 0 / 20%)'
};

const groupNameStyle = {
    padding: '8px 16px',
    fontSize: '10px',
    textTransform: 'uppercase' as const,
    opacity: 0.5
};

export const KProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const actions = useNavActions();
    // const {actions} = useActions();

    return (
        <KBarProvider
            options={{
                enableHistory: true
            }}
            actions={actions}
        >
            <CommandBar />
            {children}
        </KBarProvider>
    );
};

function CommandBar() {
    useSearchActions();
    return (
        <KBarPortal>
            <KBarPositioner>
                <KBarAnimator style={animatorStyle}>
                    <KBarSearch defaultPlaceholder="导航或搜索..." style={searchStyle} />
                    <RenderResults />
                </KBarAnimator>
            </KBarPositioner>
        </KBarPortal>
    );
}

function RenderResults() {
    const {results, rootActionId} = useMatches();

    return (
        <KBarResults
            items={results}
            onRender={({item, active}) =>
                typeof item === 'string' ? (
                    <div style={groupNameStyle}>{item}</div>
                ) : (
                    <ResultItem action={item} active={active} currentRootActionId={rootActionId!} />
                )
            }
        />
    );
}

const ResultItem = React.forwardRef(
    (
        {
            action,
            active,
            currentRootActionId
        }: {
            action: ActionImpl;
            active: boolean;
            currentRootActionId: ActionId;
        },
        ref: React.Ref<HTMLDivElement>
    ) => {
        const ancestors = React.useMemo(() => {
            if (!currentRootActionId) return action.ancestors;
            const index = action.ancestors.findIndex(ancestor => ancestor.id === currentRootActionId);
            // +1 removes the currentRootAction; e.g.
            // if we are on the "Set theme" parent action,
            // the UI should not display "Set theme… > Dark"
            // but rather just "Dark"
            return action.ancestors.slice(index + 1);
        }, [action.ancestors, currentRootActionId]);

        return (
            <div
                ref={ref}
                style={{
                    padding: '12px 16px',
                    background: active ? 'rgba(0 0 0 / 0.05)' : 'transparent',
                    borderLeft: `2px solid ${active ? 'var(--color)' : 'transparent'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                        fontSize: 14
                    }}
                >
                    {action.icon && action.icon}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div>
                            {ancestors.length > 0 &&
                                ancestors.map(ancestor => (
                                    <React.Fragment key={ancestor.id}>
                                        <span
                                            style={{
                                                opacity: 0.5,
                                                marginRight: 8
                                            }}
                                        >
                                            {ancestor.name}
                                        </span>
                                        <span
                                            style={{
                                                marginRight: 8
                                            }}
                                        >
                                            &rsaquo;
                                        </span>
                                    </React.Fragment>
                                ))}
                            <span>{action.name}</span>
                        </div>
                        {action.subtitle && <span style={{fontSize: 12}}>{action.subtitle}</span>}
                    </div>
                </div>
                {action.shortcut?.length ? (
                    <div aria-hidden style={{display: 'grid', gridAutoFlow: 'column', gap: '4px'}}>
                        {action.shortcut.map(sc => (
                            <kbd
                                key={sc}
                                style={{
                                    padding: '4px 6px',
                                    background: 'rgba(0 0 0 / .1)',
                                    borderRadius: '4px',
                                    fontSize: 14
                                }}
                            >
                                {sc}
                            </kbd>
                        ))}
                    </div>
                ) : null}
            </div>
        );
    }
);
