import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {useAppSelector} from '~/store';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    const avatar = useAppSelector(n => n.global.avatar);
    const description = useAppSelector(n => n.global.description);

    return (
        <div className={styles.footer}>
            <div className="section1">
                <div className="container row">
                    {/* <!-- 简介 --> */}
                    <div className="col-12 col-m-24 row des">
                        <div className="col-8">
                            <img src={avatar} alt="avatar" className="avatar" />
                            {/* <Image alt="avatar" className="avatar" src={avatar} /> */}
                        </div>
                        <div className="col-16">
                            <h2 style={{margin: 0}}>闲暇时候的文章</h2>
                            {description.map((content, index) => (
                                <p key={index}>{content}</p>
                            ))}
                        </div>
                    </div>
                    {/* <!-- 相关链接 --> */}
                    <div className="col-6 col-m-12 link">
                        <h2>相关链接</h2>
                        <ul>
                            <li>
                                <a href="https://github.com/shalldie" target="_blank" rel="noreferrer">
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="https://www.cnblogs.com/lianmin/" target="_blank" rel="noreferrer">
                                    我的博客园
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- 关于 --> */}
                    <div className="col-6 col-m-12 about">
                        <h2>关于</h2>
                        <ul>
                            <li>
                                <Link href="/about">我，和我的博客</Link>
                            </li>
                            <li style={{marginTop: 0}}>
                                <a
                                    href="https://github.com/shalldie"
                                    target="_blank"
                                    style={{textDecoration: 'none'}}
                                    rel="noreferrer"
                                >
                                    <i style={{fontSize: '60px'}} className="fa-brands fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div>
                    Copyright © 2017 - 2023 xieshuang. All Rights Reserved. Power by k8s + nestjs + next + vue +
                    typescript.
                </div>
                <div>
                    <a target="_blank" href="http://beian.miit.gov.cn/" rel="noreferrer">
                        鄂ICP备20008501号-1
                    </a>
                </div>
            </div>
        </div>
    );
};
