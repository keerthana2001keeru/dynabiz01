import React from 'react'
import styles from './portfoliosingleCasefive.module.scss'

export default function PortfolioSingleCaseFive() {
    return (
        <div className='container'>
            <div className="row">
                <div className='text-center'>
                    <img className={'img-fluid ' + styles.imgs} src="/uploads/single-port-2-1.jpg" alt="" />
                </div>
                <div className={styles.setContentGrp}>
                    <div className={styles.title}>
                        Project Title
                    </div>
                    <div className={styles.description}>
                        Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high. Our Trading helps clients run and transform their fro nt, middle and back-office trading operations. We provide buy-side, sell. More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading.
                    </div>
                    <div className={styles.grupTextSection}>
                        <div className={styles.grupTextSetup}>
                            Client <span className={styles.gruptextTwo}>DreamAct</span>
                        </div>
                        <div className={styles.grupTextSetup}>
                            Date <span className={styles.gruptextTwo}>17 August 2017</span>
                        </div>
                        <div className={styles.grupTextSetup}>
                            Skills <span className={styles.gruptextTwo}>Project Planning</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
