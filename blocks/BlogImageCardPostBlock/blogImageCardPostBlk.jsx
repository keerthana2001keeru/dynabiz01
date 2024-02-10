import React from 'react'
import styles from './blogImageCardPostBlk.module.scss'
import BlogImageCardPost from '../../components/BlogImageCardPost/blogImageCardPost'

export default function BlogImageCardPostBlk(props) {
    return (
        <div className={styles.contanierSetup}>
            <BlogImageCardPost setCmp={props?.setData} />
        </div>
    )
}
