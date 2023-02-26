import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useMemo} from 'react';
import {When} from 'react-if';
import {RndColor} from '~/libs/utils';
import styles from './LabelBox.module.scss';

export interface ILabelBoxProps {
    list: {name: string; count: number}[];
}

export const LabelBox: React.FC<ILabelBoxProps> = props => {
    const router = useRouter();

    const labels = useMemo(() => {
        return props.list.map((label, index) => {
            return {
                ...label,
                content: label.name + (label.count ? `(${label.count})` : ''),
                bgColor: RndColor.colors[index % RndColor.colors.length]
            };
        });
    }, [props.list]);

    const curLabel = useMemo(() => {
        return labels.find(n => n.name === router.query.label);
    }, [router, labels]);

    return (
        <div className={styles.labelbox}>
            <When condition={!!curLabel}></When>
            {labels.map((label, index) => (
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
