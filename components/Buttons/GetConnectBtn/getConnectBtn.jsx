import React from 'react'
import styles from './getConnectBtn.module.scss'
import { FaArrowRight } from 'react-icons/fa';


export default function GetConnectBtn() {
    return (
        <div>
            <button className={`${styles.BtnOne} ${styles.buttonSetUp}`}>Get A Quote <FaArrowRight style={{ paddingLeft: '5px' }} /></button>
        </div>
    )
}
