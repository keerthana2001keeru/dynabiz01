import React from 'react'
import styles from './topbarLinks.module.scss'
export default function TopbarLinks() {
    return (
        <>
            <div className={'d-flex justify-content-evenly ' + styles.SectionSetup}>
                <div className={styles.item}>ALL</div>
                <div className={styles.item}>FINTECH</div>
                <div className={styles.item}>INVESTING</div>
                <div className={styles.item}>MARKETING</div>
                <div className={styles.item}>PLANNING</div>
            </div>
        </>
    )
}
