import React from 'react'
import styles from './asidePostFormatBlk.module.scss'
import AsideBlogPost from '../../components/AsideBlogPost/asideBlogPost'
import Breadcrumb from '../../components/Breadcrumb/breadcrumb'

export default function AsidePostFormatBlk() {
    return (
        <section className='sec-mar'>
        <div className='container-fluid p-0'>
            <Breadcrumb />
            <div className={'pt-5 container-xxl ' + styles.postFormat}><AsideBlogPost /></div>
        </div>
        </section >
    )
}
