import React from 'react'
import styles from './centerAlignParagraph.module.scss'

export default function CenterAlignParagraph(props) {
    return (
        <div className='container-fluid'>
            <div className='text-center'>
                <div className={styles.heading}>
                    {props?.setCmp[0]?.title}
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
