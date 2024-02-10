import React from 'react'
import styles from './blogLeftSidebarBlock.module.scss'
import RecentPostWidget from '../../components/RecentPostWidget/recentPostWidget'
import SearchWidget from '../../components/SearchWidget/searchWidget'
import TextWidget from '../../components/TextWidget/textWidget'


const postSet = [
    {
        text: 'I sink under the weight'
    },
    {
        text: 'Possession of my entire soul'
    },
    {
        text: 'I am so happy, my dear friend'
    },
    {
        text: 'Pityful a rethoric question ran'
    },
    {
        text: 'Even the all-powerful Pointing'
    }
]

const textWidgets = [
    {
        title: 'About Us',
        texts: 'Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.'
    }
]
export default function BlogLeftSidebarBlock() {
    return (
        <div className={styles.contanierSetup}>
            <SearchWidget />
            <TextWidget setCmp={textWidgets} />
            <RecentPostWidget setCmp={postSet} />
        </div>
    )
}
