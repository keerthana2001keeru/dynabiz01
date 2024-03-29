import React from 'react'
import styles from './simpleSetComponent.module.scss'

export default function SimpleSetComponent(props) {
   // console.log(props)
    return (
        <div className='container-fluid p-0'>
            <div className={styles.heading}>
                {props?.setCmp?.heading}
            </div>
            <p className={styles.description}>
                {props?.setCmp?.description}
            </p>
            {props?.setCmp?.listItems.length > 0 ? <ul>
                {props?.setCmp?.listItems?.map((items, index) => {
                    return (
                        <li className={styles.listItem} key={index}>{items.item}</li>
                    )
                })}
            </ul> : ''}

        </div>
    )
}
