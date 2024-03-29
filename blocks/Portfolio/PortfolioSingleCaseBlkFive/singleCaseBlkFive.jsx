import React from 'react'
import PortfolioSingleCaseSeven from '../../../components/PortfolioSingleCaseSeven/portfolioSingleCaseSeven'
import PortfolioSingleCaseTwo from '../../../components/PortfolioSingleCaseTwo/portfolioSingleCaseTwo'
import styles from './singleCaseBlkFive.module.scss'

export default function SingleCaseBlkFive() {
    return (
        <div>
            <PortfolioSingleCaseTwo />
            <div className={styles.setStyleCmp}><PortfolioSingleCaseSeven /></div>
        </div>
    )
}
