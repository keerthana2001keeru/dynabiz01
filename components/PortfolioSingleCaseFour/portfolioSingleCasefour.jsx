import React from 'react'
import styles from './portfolioSingleCaseFour.module.scss'

export default function PortfolioSingleCasefour() {
    return (
        <div className='container-fluid'>
            <div className="row pt-3">
                <div className='col-12 col-md-7'>
                    <div className={styles.setContentGrp}>
                        <div className={styles.title}>
                            Help Monitoring
                        </div>
                        <div className={styles.description}>
                            More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include a powerful alliance network with leading capital markets software vendors, and programs such as the FinTech Innovation Lab that keep us at the forefront of innovation. Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms.
                        </div>
                        <div className={styles.descriptionTwo}>
                            We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement.
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-5'
                    style={{
                        backgroundImage: "url('/uploads/shutterstock_400221685.jpg')",
                        backgroundRepeat: "no-repeat",
                        // backgroundPosition: "right",
                        backgroundSize: "cover",
                        backgroundAttachment: 'fixed',
                        transform: 'translate(0px, 18.625px)'
                    }}>
                </div>
            </div>
        </div >
    )
}
