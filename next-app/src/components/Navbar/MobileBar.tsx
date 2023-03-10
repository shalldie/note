import React, { useState } from 'react';
import classNames from 'classnames';
import { TransitionWrap } from '../TransitionWrap';
import { useAppSelector } from '~/store';
import { DynamicComponent } from '../DynamicComponent';
import Link from 'next/link';
import { When } from 'react-if';

export const MobileBar: React.FC<IClassName & { light: boolean }> = props => {
    const { brand, menus } = useAppSelector(n => n.global.navbar);
    const [visible, setVisible] = useState(false);

    return (
        <div className={classNames(props.className, props.light ? 'text-white' : '', 'relative h-[50px]')}>
            <i onClick={() => setVisible(true)} className="fa-solid fa-bars text-[28px] absolute right-3 top-2"></i>
            <TransitionWrap in={visible} mode="slide">
                <div
                    onTouchMove={e => e.preventDefault()}
                    className="mobile-menu fixed top-0 left-0 w-full h-full bg-white text-[var(--color)]"
                >
                    {/* close */}
                    <i
                        onClick={() => setVisible(false)}
                        className="fa fa-times absolute text-[28px] right-2 top-2 w-8 h-8 flex items-center justify-center"
                    ></i>
                    {/* menu */}
                    <div className="p-10">
                        <h2>{brand.text}</h2>
                        {menus.map((item, index) => (
                            <DynamicComponent
                                is={item.link ? Link : 'div'}
                                href={item.link}
                                key={index}
                                className="block border-solid border-0 border-b border-[#ddd] text-[var(--color)] no-underline leading-[50px] pl-6"
                            >
                                <div>
                                    <When condition={item.icon}>
                                        <i className={classNames(item.icon, 'mr-2')}></i>
                                    </When>
                                    <span>{item.title}</span>
                                </div>
                                <When condition={!!item.children}>
                                    <div>
                                        {item.children?.map((subItem, subIndex) => (
                                            <Link
                                                href={subItem.link}
                                                key={subIndex}
                                                className="block border-solid border-0 border-t border-[#ddd] text-[var(--color)] no-underline pl-6"
                                            >
                                                <When condition={subItem.icon}>
                                                    <i className={classNames(subItem.icon, 'mr-2')}></i>
                                                </When>
                                                <span>{subItem.title}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </When>
                            </DynamicComponent>
                        ))}
                    </div>
                </div>
            </TransitionWrap>
        </div>
    );
};
