import React from 'react'
import { FaSearch } from 'react-icons/fa';
import styles from './imageFrame.module.scss'

export default function ImageFrame(props) {
    // console.log(props.element);
    return (
        <>
            <div className={styles.imgZoom}>
                <img src="/uploads/shutterstock_431851042.jpg" className={styles.imgSetup} alt="..." />
                <div className={styles.overlayText}>
                    {props.element.hovercontent ? <FaSearch /> : 'Family Asset Management'}
                </div>
            </div>
            {props.element.heading ? <div className={'text-center ' + styles.textSetup}>
                Family Asset Management
            </div> : null}

            {props.element.des ? <p className={styles.desSetup}>
                Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.
            </p> : null}
        </>
    )
}
