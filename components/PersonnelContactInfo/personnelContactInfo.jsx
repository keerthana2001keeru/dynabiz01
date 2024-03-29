import React from 'react'
import styles from './personnelContactInfo.module.scss'

export default function PersonnelContactInfo() {
    return (
        <div className={'container-fluid p-0 ' + styles.containerSection}>
            <div className={"text-center " + styles.subContainer}>
                <div className={styles.title}>
                    CONTACT INFO
                </div>
                <div className={styles.connect}>
                    Phone :<span> (1)-1234-4444</span>
                </div>
                <div className={styles.connect}>
                    Email :<span> Contact@GoodLayers.com</span>
                </div>
            </div>
        </div>
    )
}
