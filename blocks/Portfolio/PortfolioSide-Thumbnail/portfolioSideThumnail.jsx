import React from 'react'
import ThumbnailSidebar from '../../../components/Image-ThumbnailLarge-sidebar/thumbnailLargeSidebar'
import styles from './portsideThumbnail.module.scss'


export default function PortfolioSideThumnail(props) {
    return (
        <>
            <div className={styles.sectionStyle}>
                <ThumbnailSidebar imgitem={props.imgitem}></ThumbnailSidebar>
            </div>
        </>
    )
}
