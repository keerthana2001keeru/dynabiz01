import React from 'react'
import styles from './singleImage.module.scss'

export default function SingleImage(props) {
    return (
        <div className='container-fluid'>
            <img className={'img-fluid ' + styles.imgSetup} src={props?.setCmp?.img} alt="" />
        </div>
    )
}
