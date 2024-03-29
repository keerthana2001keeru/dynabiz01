import React from 'react'
import Breadcrumb from '../../components/Breadcrumb/breadcrumb'
import LinkBlogPost from '../../components/LinkBlogPost/linkBlogPost'
import styles from './linkPostFormatBlk.module.scss'

export default function LinkPostFormatBlk() {
    return (
        <div className='container-fluid p-0'>
            <Breadcrumb />
            <div className={'pt-5 container-xxl ' + styles.postFormat}><LinkBlogPost /></div>
        </div>
    )
}
