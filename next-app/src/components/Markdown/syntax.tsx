import React from 'react';

import classNames from 'classnames';

import {cdn} from '~/libs/cdn';
import {RemoteComponent} from '../RemoteComponent';

interface ICodeComponentProps extends React.PropsWithChildren<IClassName> {
    node: any;
    inline: boolean;
}

const CodeLoading: React.FC<React.PropsWithChildren<IClassName>> = props => {
    return (
        <pre
            className={classNames(props.className)}
            style={{
                background: 'rgb(30, 30, 30)',
                margin: '0.5em 0px',
                padding: '1em 1em 1em 3.2em',
                color: 'rgb(212, 212, 212)',
                fontSize: '13px',
                lineHeight: '1.5'
            }}
        >
            <code>{props.children}</code>
        </pre>
    );
};

export const CodeComponent: React.FC<ICodeComponentProps> = ({node: _, inline, className, children, ...props}) => {
    const match = /language-(\w+)/.exec(className || ''); // 是否标注了语言

    // 行内 code，或者没标注语言
    if (inline || !match) {
        return (
            <code className={classNames(className, {'text-green-600': inline})} {...props}>
                {children}
            </code>
        );
    }

    // 服务端
    // if (!loaded) {
    //     return (
    //         <CodeLoading className={className} {...props}>
    //             {children}
    //         </CodeLoading>
    //     );
    // }

    // 客户端、标注了语言、非行内的 code，才需要染色高亮
    // 服务端会使用 loading
    return (
        <RemoteComponent
            url={cdn.ReactSyntaxHighlighter}
            loading={() => <CodeLoading>{children}</CodeLoading>}
            cprops={{
                children: String(children).replace(/\n$/, ''),
                language: match?.[1]?.toLowerCase(),
                PreTag: ({...props}) => <pre className="syntax-pre" {...props}></pre>,
                showLineNumbers: true,
                ...props
            }}
        />
    );
};
