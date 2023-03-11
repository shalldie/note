import 'github-markdown-css';

import React, { useEffect } from 'react';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import classNames from 'classnames';

import styles from './Markdown.module.scss';
import { markdownRewrites } from './Markdown.component-rewrites';

import { PhotoSwipe } from '../PhotoSwipe';

export interface IMarkdownProps extends IClassName {
    content: string;
}

export const Markdown: React.FC<IMarkdownProps> = props => {
    const cls = classNames('markdown-body', props.className, styles.markdown);

    useEffect(() => {
        // 处理hash跳转
        if (window.location.hash.length) {
            window.location.href = window.location.hash;
        }
    }, []);

    return (
        <>
            <ReactMarkdown
                className={cls}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={markdownRewrites}
            >
                {props.content}
            </ReactMarkdown>
            <PhotoSwipe gallery={'.' + styles.markdown} childrenSelector="a.photoswipe" />
        </>
    );
};

export default Markdown;
