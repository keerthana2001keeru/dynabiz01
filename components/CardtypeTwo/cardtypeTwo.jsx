import React from 'react'
import styles from './cardtypetwo.module.scss'

export default function CardtypeTwo() {
    return (
        <>
            <div className={"card mb-3 shadow-sm p-3 " + styles.twoSectionCard}>
                <img className={"img-fluid mx-auto " + styles.twoSectionCardImg} src="/uploads/service-icon-1.png" alt="..." />
                <div className="card-body text-center">
                    <h5 className={"card-title " + styles.twoSectionCardTitle}>Capital Markets</h5>
                    <p className={"card-text " + styles.twoSectionCardDes}>Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.</p>
                </div>
            </div>
        </>
    )
}
