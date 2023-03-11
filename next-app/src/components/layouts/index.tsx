import { getCDNImage } from '~/libs/utils';
import { LayoutColumn } from './column';
import { LayoutDefault } from './default';

export const Layout = {
    Default: LayoutDefault,
    Column: LayoutColumn
};

export const cover = {
    main: {
        style: {
            backgroundImage: `url(${getCDNImage('images/banner/sky.jpg')})`,
            height: '700px',
            backgroundPosition: 'center center'
        },
        content: [
            //
            <div key={1} className="w-[130px] text-left">
                不要催，
            </div>,
            <div key={2} className="w-[130px] text-right">
                越催越慢......
            </div>
        ]
    },
    section: {
        style: {
            backgroundImage: `url(${getCDNImage('images/banner/table.jpg')})`,
            height: '600px'
        },
        content: [
            //
            <div key={1} className="w-[130px] text-left">
                不要催，
            </div>,
            <div key={2} className="w-[130px] text-right">
                越催越慢......
            </div>
        ]
    },
    detail: {
        style: {
            backgroundImage: `url(${getCDNImage('images/banner/program.jpg')})`,
            height: '500px'
        },
        content: ['...']
    }
};
