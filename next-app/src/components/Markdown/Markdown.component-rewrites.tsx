import React from 'react';

import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { NormalComponents } from 'react-markdown/lib/complex-types';

import { CodeComponent } from './Markdown.syntax-highlighter';
import { ImgPhotoSwipe } from './Markdown.img-photoswipe';
import { generateH } from './Markdown.generate-h';

type TRewriteHandler = Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents>;

export const markdownRewrites: TRewriteHandler = {
    h1: generateH('h1'),
    h2: generateH('h2'),
    h3: generateH('h3'),
    h4: generateH('h4'),
    h5: generateH('h5'),
    h6: generateH('h6'),
    a: ({ node: _, ...props }) => <a target="_blank" {...props}></a>,
    img: ImgPhotoSwipe as any,
    code: CodeComponent as any,
    pre: ({ node: _, ...props }) => {
        const hasSyntax = /language-(\w+)/.test((props.children[0] as any)?.props?.className || '');

        // 需要高亮的节点，交给 code 去处理。
        // 外面不在包裹 pre 了
        if (hasSyntax) {
            return <>{props.children}</>;
        }

        return <pre>{props.children}</pre>;
    }
};
