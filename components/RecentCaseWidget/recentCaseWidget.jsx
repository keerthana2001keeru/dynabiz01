import React from 'react'
import styles from './recentCaseWidget.module.scss'
import { BsLink45Deg } from 'react-icons/bs'

const cards = [
    {
        content: '/uploads/pexels-photo-380769-150x150.jpeg'
    },
    {
        content: '/uploads/shutterstock_431851042-150x150.jpg'
    },
    {
        content: '/uploads/shutterstock_334043390-150x150.jpg'
    }
    ,
    {
        content: '/uploads/shutterstock_251320138-150x150.jpg'
    }
    ,
    {
        content: '/uploads/shutterstock_337088285-150x150.jpg'
    }
    ,
    {
        content: '/uploads/pexels-photo-315788-150x150.jpeg'
    }

]
export default function RecentCaseWidget() {
    return (
        <div>
            <div className={styles.title}>
                Recent Cases
            </div>
            <div className='d-flex flex-wrap'>
                {cards.map((item) => {
                    return (
                        <div className={'' + styles.cardSet}>
                            <div className={styles.imgZoom}>
                                <img className={styles.imgSetup}
                                    src={item.content} />
                                <div className={styles.overlayText}>
                                    <BsLink45Deg size={18} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
