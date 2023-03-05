import React, {useMemo} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

import classNames from 'classnames';
import {When} from 'react-if';

import {useLoad} from '~/libs/hooks';
import {RndColor} from '~/libs/utils';
import {useAppSelector} from '~/store';

import styles from './LabelBox.module.scss';

export const LabelBox: React.FC<{className?: string}> = props => {
    const router = useRouter();
    const loaded = useLoad();
    const labels = useAppSelector(n => n.article.labels);

    const labelList = useMemo(() => {
        return labels.map((label, index) => {
            return {
                ...label,
                content: label.name + (label.count ? `(${label.count})` : ''),
                bgColor: loaded ? RndColor.colors[index % RndColor.colors.length] : 'gray'
            };
        });
    }, [labels, loaded]);

    const curLabel = useMemo(() => {
        return labelList.find(n => n.name === router.query.label);
    }, [router, labelList]);

    const cls = classNames(styles.labelbox, props.className);

    return (
        <div className={cls}>
            <When condition={!!curLabel}>
                <div className="font-bold text-[14px] mb-5 flex items-center">
                    <span>当前展示：</span>
                    <Link
                        className="tooltip group rounded duration overflow-hidden no-underline text-[12px] color border border-r-0 border-solid border-[var(--color)] hover:border-[var(--color-red)] hover:text-[var(--color-red)] hover:shadow-xl"
                        data-tooltip-content="清除标签"
                        href="/article"
                    >
                        <span className="py-1 px-3">{`${curLabel?.name}(${curLabel?.count})`}</span>
                        <i className="fa fa-close py-1 px-3 duration bg-[var(--color)] text-white group-hover:bg-[var(--color-red)]"></i>
                    </Link>
                </div>
            </When>
            {labelList.map((label, index) => (
                <Link
                    href={`/article?label=${label.name}`}
                    className="label"
                    style={{backgroundColor: label.bgColor}}
                    key={index}
                >
                    {label.content}
                </Link>
            ))}
        </div>
    );
};
