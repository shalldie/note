import classNames from 'classnames';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {ARTICLE_MD_CLS} from '~/store';
import {ScrollActive} from '../ScrollActive';

import styles from './styles.module.scss';

export interface IArticleIndexProps {
    container: React.RefObject<HTMLElement>;
}

const useTitles = () => {
    const router = useRouter();

    const [titles, setTitles] = useState<{name: string; cls: string}[]>([]);

    useEffect(() => {
        const articleMD = document.querySelector('.' + ARTICLE_MD_CLS);
        if (!articleMD) {
            return;
        }

        const list = Array.from(articleMD.querySelectorAll('[id]'))
            .filter(ele => /^h\d$/i.test(ele.tagName))
            .map(ele => ({
                name: ele.id,
                cls: ele.tagName.toLowerCase()
            }));
        setTitles(list);
    }, [router.asPath]);

    return titles;
};

export const ArticleIndex: React.FC = () => {
    const titles = useTitles();
    return (
        <ScrollActive className={styles.articleindex} hash>
            <h3 className="ai-title">索引</h3>
            {titles.map((ti, index) => (
                <div key={index} data-scroll-active={ti.name} className={classNames(ti.cls, 'ai-item')}>
                    {ti.name}
                </div>
            ))}
        </ScrollActive>
    );
};
