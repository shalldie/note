import React, { useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './TransitionWrap.module.scss';

const FadeClassName = {
    enter: styles.fadeEnter,
    enterActive: styles.fadeEnterActive,
    exit: styles.fadeExit,
    exitActive: styles.fadeExitActive
};

const SlideClassName = {
    enter: styles.slideEnter,
    enterActive: styles.slideEnterActive,
    exit: styles.slideExit,
    exitActive: styles.slideExitActive
};

export interface ITransitionWrapProps {
    in?: boolean;
    mode?: 'fade' | 'slide';
}

export const TransitionWrap: React.FC<React.PropsWithChildren<ITransitionWrapProps>> = props => {
    const classNames = useMemo(() => {
        return {
            fade: FadeClassName,
            slide: SlideClassName
        }[props.mode || 'fade'];
    }, [props.mode]);

    return (
        <CSSTransition
            //
            in={props.in}
            classNames={classNames}
            timeout={300}
            mountOnEnter
            unmountOnExit
        >
            {props.children}
        </CSSTransition>
    );
};
