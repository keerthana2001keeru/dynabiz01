import React from 'react'
import styles from './portfolioSingleCaseSeven.module.scss'

export default function PortfolioSingleCaseSeven() {
    return (
        <div className='container-fluid p-0'>
            <div className="row pt-3">
                <div className={styles.title}>
                    What We’ve Done
                </div>
                <div className={styles.desSection}>
                    <p className={styles.desOne}><span className={styles.highlightSection}>We provide buy-side</span>, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement</p>

                    <p className={styles.desOneSub}>More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include</p>
                </div>
            </div>
        </div>
    )
}
