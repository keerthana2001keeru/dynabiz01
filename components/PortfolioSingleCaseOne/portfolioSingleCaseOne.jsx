import React from 'react'
import styles from './portfoliosinglecaseone.module.scss'

export default function PortfolioSingleCaseOne() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12 col-md-6 text-center">
                    <img className={'img-fluid ' + styles.imgs} src="/uploads/single-port-3-1-1.jpg" alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <div className={styles.setContentGrp}>
                        <div className={styles.title}>
                            Project Title
                        </div>
                        <div className={styles.description}>
                            Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high. Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell.
                        </div>
                        <div className={styles.grupTextSection}>
                            <div className={styles.grupTextSetup}>
                                Client <span className={styles.gruptextTwo}>DreamAct</span>
                            </div>
                            <div className={styles.grupTextSetup}>
                                Date <span className={styles.gruptextTwo}>17 August 2017</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
