import React, { useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import styles from './lightBox.module.scss'
import GalleryBlogpost from '../GalleryBlogPost/galleryBlogpost';


export default function LightBox(props) {
    const items = props?.imgs;
    const lightGallery = useRef(null);

    // const openGallery = useCallback(() => {
    //     debugger
    //     lightGallery.current.openGallery();
    // }, []);

    const onInit = useCallback((detail) => {
        if (detail) {
            lightGallery.current = detail.instance;
            lightGallery.current.openGallery();
        }
    }, []);

    const onAfterClose = (detail) => {
        <GalleryBlogpost />
        // console.log('success')
    };

    return (
        <>
            <div className="App">
                {/* <button onClick={openGallery}>open open</button> */}
                <LightGallery
                    elementClassNames="custom-classname"
                    dynamic
                    dynamicEl={items}
                    onInit={onInit}
                    onAfterClose={onAfterClose}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                </LightGallery>
            </div>
        </>
    )
}

