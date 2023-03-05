import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import {ResourceLoader} from '../ResourceLoader';

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

export const GitComment: React.FC<IGitCommentProps> = props => {
    const root = useRef<HTMLDivElement>(null);

    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!ready) {
            return;
        }

        const Vue = window['Vue'];
        // Vue.config.devtools = true;
        // Vue.config.productionTip = true;

        const VueGitComment = window['VueGitComment'];

        new Vue({
            el: root.current,
            render: h => {
                return h(VueGitComment, {
                    props: {
                        options: {
                            uuid: props.uuid,
                            ...config
                        }
                    }
                });
            }
        });
    }, [props.uuid, ready]);

    return (
        <>
            <ResourceLoader
                waterfallScripts={[
                    //
                    'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.min.js',
                    'https://cdn.jsdelivr.net/npm/vue-git-comment@0.1.0/dist/vue-git-comment.umd.js'
                ]}
                onReady={() => setReady(true)}
            />
            <div className={classNames('git-comment', props.className)}>
                <div ref={root}></div>
            </div>
        </>
    );
};
