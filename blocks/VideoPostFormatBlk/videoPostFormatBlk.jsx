import React from 'react'
import styles from './videoPostFormatBlk.module.scss'
import Breadcrumb from '../../components/Breadcrumb/breadcrumb'
import VideoBlogPost from '../../components/VideoBlogPost/videoBlogPost'

export default function VideoPostFormatBlk() {
    return (
        <div className='container-fluid p-0'>
            <Breadcrumb />
            <div className={'pt-5 container-xxl ' + styles.postFormat}><VideoBlogPost /></div>
        </div>
    )
}
