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
import {Sidebar} from '../Sidebar';
import {LayoutDefault} from './default';

export const LayoutColumn: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <LayoutDefault className="layout-column">
            <div className="container mx-auto grid grid-cols-4 gap-2 mt-3">
                <div className="col-span-3">{children}</div>
                <div className="col-span-1">
                    <Sidebar />
                </div>
            </div>
        </LayoutDefault>
    );
};
