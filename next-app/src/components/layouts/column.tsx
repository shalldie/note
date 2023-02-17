{
    /* <LayoutDefault class="layout-column">
        <div class="container row">
            <div class="col-18 col-m-24" :class="{ 'col-offset-3': !floatbar.showMenu }" style="position: relative">
                <nuxt />
            </div>
            <TransitionWrap>
                <div v-show="floatbar.showMenu" class="col-6 col-m-hidden">
                    <RightMenu />
                </div>
            </TransitionWrap>
        </div>
        <FloatBar />
    </LayoutDefault> */
}

import React from 'react';
import {Footer} from '../Footer';
import {Navbar} from '../Navbar';
import {Sidebar} from '../Sidebar';
import {LayoutDefault} from './default';

export const LayoutColumn: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <LayoutDefault className="layout-column">
            <div className="container row" style={{marginTop: '15px'}}>
                <div className="col-18 col-m-24">{children}</div>
                <div className="col-6 col-m-hidden">
                    <Sidebar />
                </div>
            </div>
        </LayoutDefault>
    );
};
