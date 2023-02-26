import Link from 'next/link';
import React from 'react';
import {useAppSelector} from '~/store';

// import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    const avatar = useAppSelector(n => n.global.avatar);
    const description = useAppSelector(n => n.global.description);

    return (
        <div className="bg-color text-[#bec4ce]">
            <div className="bg-color pt-20 pb-12">
                <div className="container mx-auto grid grid-cols-4 gap-x-8">
                    {/* <!-- 简介 --> */}
                    <div className="col-span-2 grid grid-cols-4">
                        <div className="col-span-1">
                            <img src={avatar} alt="avatar" className="rounded-full max-w-[80%]" />
                            {/* <Image alt="avatar" className="avatar" src={avatar} /> */}
                        </div>
                        <div className="col-span-3">
                            <h2 className="mt-0">闲暇时候的文章</h2>
                            {description.map((content, index) => (
                                <p key={index}>{content}</p>
                            ))}
                        </div>
                    </div>
                    {/* <!-- 相关链接 --> */}
                    <div className="col-span-1">
                        <h2 className="mt-0">相关链接</h2>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/shalldie"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="no-underline text-[#bec4ce] duration-300 hover:text-white hover:underline"
                                >
                                    Github
                                </a>
                            </li>
                            <li className="mt-2">
                                <a
                                    href="https://www.cnblogs.com/lianmin/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="no-underline text-[#bec4ce] duration-300 hover:text-white hover:underline"
                                >
                                    我的博客园
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- 关于 --> */}
                    <div className="col-span-1">
                        <h2 className="mt-0">关于</h2>
                        <ul>
                            <li>
                                <Link
                                    href="/about"
                                    className="no-underline text-[#bec4ce] duration-300 hover:text-white hover:underline"
                                >
                                    我，和我的博客
                                </Link>
                            </li>
                            <li className="mt-2">
                                <a
                                    href="https://github.com/shalldie"
                                    target="_blank"
                                    style={{textDecoration: 'none'}}
                                    rel="noreferrer"
                                    className="no-underline text-[#bec4ce] duration-300 hover:text-white hover:underline"
                                >
                                    <i style={{fontSize: '60px'}} className="fa-brands fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center py-[30px] bg-[#323842]">
                <div>
                    Copyright © 2017 - 2023 xieshuang. All Rights Reserved. Power by k8s + nestjs + next + vue +
                    typescript.
                </div>
                <div>
                    <a
                        target="_blank"
                        href="http://beian.miit.gov.cn/"
                        rel="noreferrer"
                        className="no-underline text-[#848fa2] duration-300 hover:text-white hover:underline"
                    >
                        鄂ICP备20008501号-1
                    </a>
                </div>
            </div>
        </div>
    );
};
