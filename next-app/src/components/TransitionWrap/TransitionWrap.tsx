import React, {useMemo} from 'react';
import {CSSTransition} from 'react-transition-group';
import styles from './TransitionWrap.module.scss';

const FadeClassName = {
    enter: styles.fadeEnter,
    enterActive: styles.fadeEnterActive,
    exit: styles.fadeExit,
    exitActive: styles.fadeExitActive
};

export interface ITransitionWrapProps {
    in?: boolean;
    mode?: 'fade';
}

export const TransitionWrap: React.FC<React.PropsWithChildren<ITransitionWrapProps>> = props => {
    const classNames = useMemo(() => {
        return {
            fade: FadeClassName
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
