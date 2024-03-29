import React from 'react'
import styles from './simpleListTwoColumn.module.scss'

export default function SimpleListTwoColumn(props) {
    return (
        <div className={'container-fluid p-0'}>
            <div className={styles.contentSet}>
                <div className={styles.mainTitle}>
                    {props?.setCmp?.mainTitle?.value}
                </div>
                <div className={styles.subTitle}>
                    {props?.setCmp?.subtitle?.value}
                </div>
            </div>
        </div>
    )
}
