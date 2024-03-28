import React from 'react'
import styles from './audioPostFormatBlk.module.scss'
import AudioBlogPost from '../../components/AudioBlogPost/audioBlogPost'
import Breadcrumb from '../../components/Breadcrumb/breadcrumb'

export default function AudioPostFormatBlk() {
    return (
        <section className='sec-mar'>
        <div className='container-fluid p-0'>
            <Breadcrumb />
            <div className={'pt-5 container-xxl ' + styles.postFormat}><AudioBlogPost /></div>
        </div>
        </section>
    )
}
