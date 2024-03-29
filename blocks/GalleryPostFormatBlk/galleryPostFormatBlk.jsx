import React from 'react'
import styles from './galleryPostFormatBlk.module.scss'
import Breadcrumb from '../../components/Breadcrumb/breadcrumb'
import GalleryBlogpost from '../../components/GalleryBlogPost/galleryBlogpost'

export default function GalleryPostFormatBlk() {
    return (
        <section className='sec-mar'>
        <div>
            <div className='container-fluid p-0'>
                <Breadcrumb />
                <div className={'pt-5 container-xxl ' + styles.postFormat}><GalleryBlogpost /></div>
            </div>
        </div>
        </section>
    )
}
