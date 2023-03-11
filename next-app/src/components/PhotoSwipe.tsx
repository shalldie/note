import React, { useEffect, useRef } from 'react';
import { cdn } from '~/libs/cdn';

export interface IPhotoSwipeProps {
    gallery: string | Element;
    childrenSelector: string;
}

export const PhotoSwipe: React.FC<IPhotoSwipeProps> = props => {
    const lightbox = useRef<any>(null);

    useEffect(() => {
        (async () => {
            const [PhotoSwipe, PhotoSwipeLightbox] = await Promise.all([
                //
                System.import(cdn.PhotoSwipe).then(n => n.default),
                System.import(cdn.PhotoSwipeLightbox).then(n => n.default)
            ]);

            // debugger;

            lightbox.current = new PhotoSwipeLightbox({
                gallery: props.gallery,
                children: props.childrenSelector,
                pswpModule: PhotoSwipe
            });

            lightbox.current.init();
        })();

        return () => {
            lightbox.current?.destroy();
        };
    }, [props.gallery, props.childrenSelector]);

    return <link rel="stylesheet" href={cdn.PhotoSwipeStyle} />;
};
