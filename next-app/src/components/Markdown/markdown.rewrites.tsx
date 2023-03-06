// const generateH

import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';

import classNames from 'classnames';
import {SpecialComponents} from 'react-markdown/lib/ast-to-react';
import {NormalComponents} from 'react-markdown/lib/complex-types';

import {DynamicComponent} from '../DynamicComponent';
// import {SyntaxHighlighter, theme} from './syntax';

export const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter').then(n => n.Prism), {ssr: false});
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';

type TRewriteHandler = Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents>;

const generateH = (tag: string) => {
    return ({node: _, ...props}) => {
        const title = props.children[0];

        return (
            <DynamicComponent id={title} is={tag} className="group relative md-title">
                <a
                    className="absolute translate-x-[-100%] hidden group-hover:inline-block"
                    style={{color: '#999'}}
                    href={`#${title}`}
                >
                    <i className="fa fa-link"></i>
                </a>
                {title}
            </DynamicComponent>
        );
    };
};

export const markdownRewrites: TRewriteHandler = {
    h1: generateH('h1'),
    h2: generateH('h2'),
    h3: generateH('h3'),
    h4: generateH('h4'),
    h5: generateH('h5'),
    h6: generateH('h6'),
    a: ({node: _, ...props}) => <a target="_blank" {...props}></a>,
    img: ({node: _, className, ...props}) => {
        // 无需预览
        if (!className?.includes('preview')) {
            return <img alt="" {...props} />;
        }

        // eslint-disable-next-line
        const [state, setState] = useState({width: 0, height: 0});
        // eslint-disable-next-line
        useEffect(() => {
            const img = new Image();
            img.onload = () => {
                setState({
                    width: img.width,
                    height: img.height
                });
            };
            img.src = props.src!;
        }, [props.src]);

        return (
            <a
                className="cursor-zoom-in photoswipe"
                data-pswp-src={props.src}
                data-pswp-width={state.width}
                data-pswp-height={state.height}
            >
                <img
                    alt=""
                    {...props}
                    className={classNames(className, 'block rounded w-full mx-auto my-6 shadow-2xl')}
                    style={{maxWidth: '768px'}}
                />
            </a>
        );
    },
    code({node: _, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={theme as any}
                language={match[1]}
                PreTag={({...props}) => <pre className="syntax-pre" {...props}></pre>}
                showLineNumbers
                {...props}
            />
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },
    pre: ({node: _, ...props}) => {
        const hasSyntax = /language-(\w+)/.test((props.children[0] as any)?.props?.className || '');

        if (hasSyntax) {
            return <>{props.children}</>;
        }

        return <pre>{props.children}</pre>;
    }
};
