import React from 'react'
import styles from './ourServiceLeftBar.module.scss'
import ContactCard from '../../components/ContactCard/contactCard'
import Sidebarlinks from '../../components/SidebarLinks/sidebarlinks'
import GetConnectBtn from '../../components/Buttons/GetConnectBtn/getConnectBtn'

export default function OurServiceLeftSidebar() {
    return (
        <div className={styles.setpadding}>
            <Sidebarlinks></Sidebarlinks>
            <div className='pt-3'><ContactCard></ContactCard></div>
            <div className='pt-4'><GetConnectBtn></GetConnectBtn></div>
        </div>
    )
}
