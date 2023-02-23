import {useKBar} from 'kbar';
import React from 'react';

export const KB: React.FC = () => {
    const {query} = useKBar();

    return (
        <span
            onClick={query.toggle}
            className="kb"
            style={{
                fontSize: '14px',
                background: '#fff',
                padding: '2px 6px',
                borderRadius: 'var(--border-radius)',
                border: '1px solid var(--color)',
                cursor: 'pointer'
            }}
        >
            ⌘ K
        </span>
    );
};
