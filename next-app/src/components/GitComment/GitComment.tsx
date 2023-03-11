import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { cdn } from '~/libs/cdn';

import styles from './GitComment.module.scss';

export interface IGitCommentProps extends IClassName {
    uuid: string;
}

const config = {
    clientID: '352584c6750c8c77fed5',
    clientSecret: '89ec366db92f38bab32ce41c9ae23c77f47f3b24',
    owner: 'shalldie',
    repo: 'blog-comments-store',
    language: 'zh-CN',
    proxy: 'https://nosaid.com/corsanywhere/https://github.com/login/oauth/access_token'
};

async function mountComment(el: HTMLElement, uuid: string, vm: React.MutableRefObject<any>) {
    const Vue = await System.import(cdn.Vue).then(n => n.default);
    const VueGitComment = await System.import(cdn.VueGitComment).then(n => n.default);

    vm.current = new Vue({
        el: el,
        render: h => {
            return h(VueGitComment, {
                props: {
                    options: {
                        uuid: uuid,
                        ...config
                    }
                }
            });
        }
    });
}

export const GitComment: React.FC<IGitCommentProps> = props => {
    const root = useRef<HTMLDivElement>(null);

    const vm = useRef<any>(null);

    useEffect(() => {
        mountComment(root.current!, props.uuid, vm);
        return () => {
            // eslint-disable-next-line
            vm.current?.$destroy();
        };
    }, [props.uuid]);

    return (
        <div className={classNames('git-comment', styles.gitcomment, props.className)}>
            <div ref={root}></div>
        </div>
    );
};
