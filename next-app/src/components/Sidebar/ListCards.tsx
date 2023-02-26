import React from 'react';
import {useAppSelector} from '~/store';
import {LabelBox} from '../LabelBox';
import styles from './Sidebar.module.scss';

interface ICardItemProps {
    title: string;
    icon?: React.ReactNode;
}

const CardItem: React.FC<React.PropsWithChildren<ICardItemProps>> = props => {
    return (
        <div className="card-item">
            <div className="bg-color rounded-t h-10 text-white flex items-center pl-2">
                <span className="mr-2 font-bold">{props.title}</span>
                {props.icon}
            </div>
            {props.children}
        </div>
    );
};

export const ListCards: React.FC = () => {
    const labels = useAppSelector(n => n.article.labels);
    return (
        <div className="list-cards mt-2">
            <CardItem title="标签" icon={<i className="fa-solid fa-tags" />}>
                <LabelBox list={labels} />
            </CardItem>
        </div>
    );
};
