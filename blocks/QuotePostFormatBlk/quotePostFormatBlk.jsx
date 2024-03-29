import React from 'react'
import styles from './quotePostFormatBlk.module.scss'
import Breadcrumb from '../../components/Breadcrumb/breadcrumb'
import QuoteBlogPost from '../../components/QuoteBlogPost/quoteBlogPost'

export default function QuotePostFormatBlk() {
    return (
        <div className='container-fluid p-0'>
            <Breadcrumb />
            <div className={'pt-5 container-xxl ' + styles.postFormat}><QuoteBlogPost /></div>
        </div>
    )
}
