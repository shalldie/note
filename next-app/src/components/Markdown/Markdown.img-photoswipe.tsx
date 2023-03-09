import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

interface IImgPreviewProps extends React.PropsWithChildren<IClassName> {
    node: any;
    src: string;
}

export const ImgPhotoSwipe: React.FC<IImgPreviewProps> = ({ node: _, className, ...props }) => {
    const needPreview = className?.includes('preview');

    const [state, setState] = useState({ width: 0, height: 0 });
    useEffect(() => {
        if (!needPreview) {
            return;
        }

        const img = new Image();
        img.onload = () => {
            setState({
                width: img.width,
                height: img.height
            });
        };
        img.src = props.src!;
    }, [props.src, needPreview]);

    // 无需预览
    if (!needPreview) {
        return <img alt="" {...props} />;
    }

    return (
        <a
            className="cursor-zoom-in photoswipe"
            data-pswp-src={props.src}
            data-pswp-width={state.width}
            data-pswp-height={state.height}
        >
            <img
                alt=""
                {...props}
                className={classNames(className, 'block rounded w-full mx-auto my-6 shadow-2xl')}
                style={{ maxWidth: '768px' }}
            />
        </a>
    );
};
