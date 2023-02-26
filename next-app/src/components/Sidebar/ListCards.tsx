import React from 'react';
import styles from './Sidebar.module.scss';

interface ICardItemProps {
    title: string;
    icon?: React.ReactNode;
}

const CardItem: React.FC<ICardItemProps> = props => {
    return (
        <div className="card-item">
            <div className="bg-color rounded-t h-10 text-white flex items-center pl-2">
                <span className="mr-2 font-bold">{props.title}</span>
                {props.icon}
            </div>
        </div>
    );
};

export const ListCards: React.FC = () => {
    return (
        <div className="list-cards mt-2">
            <CardItem title="标签" icon={<i className="fa-solid fa-tags " />} />
        </div>
    );
};
