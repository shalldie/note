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
            <When condition={!!curLabel}></When>
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
