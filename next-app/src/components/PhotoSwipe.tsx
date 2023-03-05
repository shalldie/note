import React, {useEffect, useRef, useState} from 'react';
import {ResourceLoader} from './ResourceLoader';

export interface IPhotoSwipeProps {
    gallery: string | Element;
    childrenSelector: string;
}

export const PhotoSwipe: React.FC<IPhotoSwipeProps> = props => {
    const [ready, setReady] = useState(false);
    const lightbox = useRef<any>(null);

    useEffect(() => {
        if (!ready) {
            return;
        }

        const PhotoSwipe = window['PhotoSwipe'];
        lightbox.current = new window['PhotoSwipeLightbox']({
            gallery: props.gallery,
            children: props.childrenSelector,
            pswpModule: PhotoSwipe
        });

        lightbox.current.init();

        return () => {
            lightbox.current?.destroy();
        };
    }, [ready, props.gallery, props.childrenSelector]);

    return (
        <>
            <ResourceLoader
                styles={['https://cdn.jsdelivr.net/npm/photoswipe@5.3.6/dist/photoswipe.css']}
                parallelScripts={[
                    'https://cdn.jsdelivr.net/npm/photoswipe@5.3.6/dist/umd/photoswipe.umd.min.js',
                    'https://cdn.jsdelivr.net/npm/photoswipe@5.3.6/dist/umd/photoswipe-lightbox.umd.min.js'
                ]}
                onReady={() => setReady(true)}
            />
        </>
    );
};
