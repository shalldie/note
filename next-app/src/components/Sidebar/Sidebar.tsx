import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

import { When } from 'react-if';

import { Cardwrap } from './Cardwrap';
import { ListCards } from './ListCards';
import { ScrollAffix } from '../ScrollAffix';
import { ArticleIndex } from './ArticleIndex';
import { ARTICLE_MD_CLS } from '~/store';

export const Sidebar: React.FC = () => {
    const router = useRouter();
    const showIndex = useMemo(() => {
        return router.pathname === '/article/[name]';
    }, [router]);

    return (
        <div className="sidebar">
            <ScrollAffix
                enable={showIndex}
                sectionSelector={'.' + ARTICLE_MD_CLS}
                offsetTop={30}
                className="max-h-[90%] overflow-y-auto"
            >
                <Cardwrap />
                <When condition={showIndex}>
                    <ArticleIndex />
                </When>
                <When condition={!showIndex}>
                    <ListCards />
                </When>
            </ScrollAffix>
        </div>
    );
};
