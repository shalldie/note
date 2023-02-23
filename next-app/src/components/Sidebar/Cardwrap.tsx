import React from 'react';
import styles from './Sidebar.module.scss';

export const Cardwrap: React.FC = () => {
    return (
        <div className={styles.cardwrap}>
            <div className="card card-coffee tooltip" data-tooltip-content="捐赠一杯咖啡">
                <i className="icon fa-solid fa-mug-saucer"></i>
            </div>
            <div className="card card-github tooltip" data-tooltip-content="去 Github 看看">
                <i className="icon fa-brands fa-github"></i>
            </div>
        </div>
    );
};
