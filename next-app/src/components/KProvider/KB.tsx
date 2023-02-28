import React from 'react';
import {useKBar} from 'kbar';
import classNames from 'classnames';

export const KB: React.FC<IClassName> = props => {
    const {query} = useKBar();

    return (
        <span
            onClick={query.toggle}
            className={classNames(
                props.className,
                'kb inline-block bg-[#e6e8ebb3] text-[#11181c99] pr-1 pl-2 py-1 cursor-pointer rounded font-bold duration hover:shadow-lg hover:text-[var(--color)]'
            )}
        >
            <span className="mr-3 text-[12px]">搜索...</span>
            <span className="inline-block bg-white rounded h-6 leading-6 px-2 text-[14px]">⌘ K</span>
        </span>
    );
};
