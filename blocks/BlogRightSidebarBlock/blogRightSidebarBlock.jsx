import React from 'react'
import styles from './blogRightSidebarBlock.module.scss'
import RecentCaseWidget from '../../components/RecentCaseWidget/recentCaseWidget'
import RecentNewsWidget from '../../components/RecentNewsWidget/recentNewsWidget'
import TagCloudWidget from '../../components/TagCloudWidget/tagCloudWidget'
import TextWidget from '../../components/TextWidget/textWidget'


const textWidgets = [
    {
        title: 'Text Widget',
        texts: 'Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada.'
    }
]
export default function BlogRightSidebarBlock() {
    return (
        <div className={styles.contanierSetup}>
            <TextWidget setCmp={textWidgets} />
            <RecentNewsWidget />
            <TagCloudWidget />
            <RecentCaseWidget />
        </div>
    )
}
