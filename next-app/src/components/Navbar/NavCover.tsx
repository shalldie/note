import React from 'react';

import classNames from 'classnames';
import styles from './Navbar.module.scss';
import Shadow from './assets/shadow.png';

export interface INavCover {
    style: any;
    content: React.ReactNode[];
}

// className="py-8 px-10 rounded bg-white bg-opacity-40"

export const NavCover: React.FC<INavCover> = props => {
    return (
        <div
            className={classNames(
                styles.triangle,
                'relative bg-cover bg-center mt-[-60px] mb-[60px] flex justify-center items-center'
            )}
            style={props.style}
        >
            <div
                className="py-8 px-10 rounded"
                style={{backgroundImage: `url(${Shadow.src})`, backgroundSize: '100% 100%'}}
            >
                {props.content?.map((line, index) => (
                    <div
                        className="text-lg text-white text-center"
                        style={{textShadow: '2px 2px 2px var(--color)'}}
                        // dangerouslySetInnerHTML={{__html: line}}
                        key={index}
                    >
                        {line}
                    </div>
                ))}
            </div>
        </div>
    );
};
