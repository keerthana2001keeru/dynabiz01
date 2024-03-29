import React from 'react'
import styles from './ourServiceCard.module.scss'
import CardtypeTwo from '../../components/CardtypeTwo/cardtypeTwo'

export default function OurServiceCard() {
    return (
        <div className={'container-fluid ' + styles.blockSetup}>
            <div className={"row mx-auto " + styles.paddingSetUp}>
                <div className={"col-md-4 col-12 "}>
                    <CardtypeTwo></CardtypeTwo>
                </div>
                <div className={"col-md-4 col-12 "}>
                    <CardtypeTwo></CardtypeTwo>
                </div>
                <div className={"col-md-4 col-12 "}>
                    <CardtypeTwo></CardtypeTwo>
                </div>
                <div className={"col-md-4 col-12 "}>
                    <CardtypeTwo></CardtypeTwo>
                </div>
                <div className={"col-md-4 col-12 "}>
                    <CardtypeTwo></CardtypeTwo>
                </div>
                <div className={"col-md-4 col-12 "}>
                    <CardtypeTwo></CardtypeTwo>
                </div>
            </div>
        </div>
    )
}
