import React from 'react'
import styles from './textWidget.module.scss'

export default function TextWidget(props) {
    return (
        <div className={styles.sectionSetup}>
            <div className={styles.title}>
                {props?.setCmp[0]?.title}
            </div>
            <p className={styles.notes}>
                {props?.setCmp[0]?.texts}
            </p>
        </div>
    )
}
