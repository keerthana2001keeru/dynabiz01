import React from 'react'
import styles from './leftAlignParagraph.module.scss'

export default function LeftAlignParagraph(props) {
    return (
        <div className='container-fluid'>
            <div>
                <div className={styles.heading}>
                    {props?.setCmp[0]?.heading}
                </div>
                <p className={styles.paragraph}>
                    {props?.setCmp[0]?.noteOne}
                </p>
                <p className={styles.paragraph}>
                    {props?.setCmp[0]?.noteTwo}
                </p>
            </div>
        </div>
    )
}
