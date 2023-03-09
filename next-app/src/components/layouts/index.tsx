import { LayoutColumn } from './column';
import { LayoutDefault } from './default';

export const Layout = {
    Default: LayoutDefault,
    Column: LayoutColumn
};

export const cover = {
    main: {
        style: {
            backgroundImage: `url(${process.env.CDN_PREFIX}images/banner/banner_sky.jpg)`,
            // backgroundImage: 'url(/hotel.jpeg)',
            height: '700px',
            backgroundPosition: 'center bottom'
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
            backgroundImage: `url(${process.env.CDN_PREFIX}images/banner/banner_zz.jpg)`,
            // backgroundImage: 'url(/city.jpeg)',
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
            backgroundImage: `url(${process.env.CDN_PREFIX}images/banner/banner_program.jpg)`,
            height: '500px'
        },
        content: ['...']
    }
};
