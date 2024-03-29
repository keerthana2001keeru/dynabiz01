import React from 'react'
import styles from './recentNewsWidget.module.scss'
import { FaAddressBook, FaRegClock } from 'react-icons/fa';


const dataSet = [
    {
        img: '/uploads/pexels-photo-529923-150x150.jpeg',
        heading: 'I sink under the weight',
        tagOne: 'JUNE 6, 2016',
        tagTwo: 'JOHN SMITH'
    },
    {
        img: '/uploads/pexels-photo-374018-150x150.jpeg',
        heading: 'I sink under the weight',
        tagOne: 'JUNE 6, 2016',
        tagTwo: 'JOHN SMITH'
    },
    {
        img: '/uploads/pexels-photo-150x150.jpg',
        heading: 'I sink under the weight',
        tagOne: 'JUNE 6, 2016',
        tagTwo: 'JOHN SMITH'
    }
]
export default function RecentNewsWidget() {
    return (
        <div className={styles.sectionSetup}>
            <div className={styles.title}>
                Recent News
            </div>
            {dataSet?.map((item) => {
                return (
                    <div className="d-flex p-2">
                        <div className="">
                            <img className={styles.imageSetup} src={item.img} alt="..." />
                        </div>
                        <div className="">
                            <div className={styles.heading}>{item.heading}</div>
                            <div className='d-flex flex-wrap'>
                                <small className={"pb-2 " + styles.hCrdTwoFooterText}>
                                    <FaRegClock size={15} style={{ marginRight: '5px' }} />{item.tagOne}
                                </small>

                                <small className={"" + styles.hCrdTwoFooterText}>
                                    <FaAddressBook size={15} style={{ marginRight: '8px' }} />{item.tagTwo}
                                </small>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
