import 'github-markdown-css';

import React from 'react';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import classNames from 'classnames';

import styles from './Markdown.module.scss';

export interface IMarkdownProps {
    content: string;
}

export const Markdown: React.FC<{content: string}> = props => {
    const cls = classNames('markdown', 'markdown-body', styles.markdown);

    return (
        <ReactMarkdown className={cls} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            {props.content}
        </ReactMarkdown>
    );
};

export default Markdown;
