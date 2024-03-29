import React from 'react'
import styles from './tagCloudWidget.module.scss'


const cards = [
    {
        content: 'Article'
    },
    {
        content: 'Building'
    },
    {
        content: 'Constructions'
    }
    ,
    {
        content: 'Industry'
    }
    ,
    {
        content: 'Metal'
    }
    ,
    {
        content: 'Mining'
    }
    ,
    {
        content: 'Nature'
    }
    ,
    {
        content: 'News'
    },
    {
        content: 'Oil'
    },
    {
        content: 'Polymer'
    }
]
export default function TagCloudWidget() {
    return (
        <div className={styles.sectionSetup}>
            <div className={styles.title}>
                Tag Cloud
            </div>
            <div className='d-flex flex-wrap'>
                {cards.map((item) => {
                    return (
                        <div className={'card ' + styles.cardSet}>
                            <div className={styles.contentSetup}>{item.content}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
