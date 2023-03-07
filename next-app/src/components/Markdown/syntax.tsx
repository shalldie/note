import React from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import {useLoad} from '~/libs/hooks';

import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import docker from 'react-syntax-highlighter/dist/esm/languages/prism/docker';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import nginx from 'react-syntax-highlighter/dist/esm/languages/prism/nginx';
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('docker', docker);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('nginx', nginx);
SyntaxHighlighter.registerLanguage('yaml', yaml);

export {SyntaxHighlighter, theme};

interface ICodeComponentProps extends React.PropsWithChildren<IClassName> {
    node: any;
    inline: boolean;
}

export const CodeComponent: React.FC<ICodeComponentProps> = ({node: _, inline, className, children, ...props}) => {
    const loaded = useLoad();
    const match = /language-(\w+)/.exec(className || ''); // 是否标注了语言

    // 只有客户端、标注了语言、非行内的 code，才需要染色高亮
    if (loaded && !inline && match) {
        return (
            <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={theme as any}
                language={match?.[1]}
                PreTag={({...props}) => <pre className="syntax-pre" {...props}></pre>}
                showLineNumbers
                {...props}
            />
        );
    }

    return (
        <code className={className} {...props}>
            {children}
        </code>
    );
};
