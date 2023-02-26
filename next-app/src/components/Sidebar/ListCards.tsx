import React from 'react';
import styles from './Sidebar.module.scss';

export const ListCards: React.FC = () => {
    return (
        <div className={styles.listcards}>
            <div className="card">
                <div className="card-header">
                    <span style={{marginRight: '6px'}}>标签</span>
                    <i className="fa-solid fa-tags " />
                </div>
            </div>
        </div>
    );
};
