import dynamic from 'next/dynamic';
import React from 'react';
import {sleep} from '~/libs/utils';

/**
 * 远程组件参数
 *
 * @export
 * @interface IRemoteComponentProps
 */
export interface IRemoteComponentProps {
    /**
     * 地址
     *
     * @type {string}
     * @memberof IRemoteComponentProps
     */
    url: string;

    /**
     * 从包中获取组件
     *
     * @memberof IRemoteComponentProps
     */
    selector?: (_: any) => any;

    /**
     * 占位
     *
     * @type {React.FC}
     * @memberof IRemoteComponentProps
     */
    loading?: React.FC;

    cprops?: any;
}

export const RemoteComponent: React.FC<IRemoteComponentProps> = props => {
    const loader = () =>
        System.import<any>(props.url).then(async n => {
            // await sleep(3000);
            return n;
        });

    const CurCom = dynamic(() => loader().then(n => props.selector?.(n) || n.default || n), {
        ssr: false,
        loading: props.loading
    });

    return <CurCom {...props.cprops} />;
};
