import React from 'react'
import styles from './imagePostFormatBlk.module.scss'
import Breadcrumb from '../../components/Breadcrumb/breadcrumb'
import ImageBlogPost from '../../components/ImageBlogPost/imageBlogPost'

export default function ImagePostFormatBlk() {
    return (
        <div className='container-fluid p-0'>
            <Breadcrumb />
            <div className={'pt-5 container-xxl ' + styles.postFormat}><ImageBlogPost /></div>
        </div>
    )
}
