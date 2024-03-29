import React from 'react'
import styles from './imageHoverBlog.module.scss'
import { FaRegClock, FaFileAlt } from 'react-icons/fa';


export default function ImageHoverBlog(props) {
    return (
        <div className='container-fluid p-0'>
            <div className={styles.imgZoom}>
                <img src={props?.setcmpt?.img} className={'' + styles.imgSetup} alt="..." />
                <div className={styles.overlayText}>
                    <div className={styles.titleSetup}>{props?.setcmpt?.title}</div> <br />
                    <FaRegClock style={{ marginRight: '8px' }} /><span className={styles.contentOne}>{props?.setcmpt?.subTitle}</span><br />
                    {props?.setcmpt?.name ? <FaFileAlt style={{ marginRight: '8px' }} /> : ''} <span className={styles.contentOne}>{props?.setcmpt?.name}</span>
                </div>
            </div>
        </div>
    )
}
