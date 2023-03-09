import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { useLocalStorage } from '~/libs/hooks';
import { useAppDispatch, useAppSelector } from '~/store';
import { globalActions } from '~/store/global';
import { SupportDialog } from '../SupportDialog';
import styles from './FloatBar.module.scss';

export const FloatBar: React.FC = () => {
    const [open, setOpen] = useLocalStorage('_floatbar_open_', false);
    const dispatch = useAppDispatch();
    const sidebar = useAppSelector(n => n.global.sidebar);

    const toggleSidebar = () => {
        dispatch(
            globalActions.assignState({
                sidebar: {
                    ...sidebar,
                    show: !sidebar.show
                }
            })
        );
    };

    const scroll2Top = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const [dialogOpen, setDialog] = useState(false);

    return (
        <div className={classNames(styles.floatbar, 'hidden md:block', { [styles.open]: open })}>
            <SupportDialog open={dialogOpen} onClose={() => setDialog(false)} />
            <div className="bar ctl-pie" onClick={() => setOpen(!open)}>
                <i className="fa-solid fa-ellipsis"></i>
            </div>
            <div onClick={scroll2Top} className="bar bar-item up tooltip" data-tooltip-content="回到顶部">
                <i className="fa-solid fa-angle-up"></i>
            </div>
            <div
                onClick={() => setDialog(true)}
                className="bar bar-item coffee tooltip"
                title="捐赠一杯咖啡☕️"
                data-tooltip-content="捐赠一杯咖啡"
            >
                <i className="fa-solid fa-mug-saucer"></i>
            </div>
            <a
                className="bar bar-item github tooltip"
                data-tooltip-content="去 github 看看"
                target="_blank"
                href="https://github.com/shalldie"
                rel="noreferrer"
            >
                <i className="fa-brands fa-github"></i>
            </a>
            <div onClick={toggleSidebar} className="bar bar-item menu tooltip" data-tooltip-content="目录/菜单">
                <i className="fa-solid fa-list-ul"></i>
            </div>
        </div>
    );
};
