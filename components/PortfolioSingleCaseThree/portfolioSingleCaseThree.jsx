import React from 'react'
import { FaRegDotCircle } from 'react-icons/fa';
import styles from './portfolioSingleCaseThree.module.scss'

export default function PortfolioSingleCaseThree() {
    return (
        <div className='container'>
            <div className="row pt-5">
                <div className={"col-md-4 " + styles.title}>
                    What We’ve Done
                </div>
                <div className="col-md-8">
                    <p className={styles.desOne}><span className={styles.highlightSection}>We provide buy-side</span>, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement</p>

                    <p className={styles.desOneSub}>More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include</p>
                </div>
            </div>
            <div className="row">
                <div className={"col-md-4 " + styles.title}>
                    Our Process
                </div>
                <div className="col-md-8">
                    <p className={styles.desOneSub}>
                        We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement, More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include

                    </p>
                    <ul className={"list-unstyled"}>
                        <li className={styles.hFiveUlItemSetup}>
                            <FaRegDotCircle className={styles.faIconStyle} />
                            Amet Sollicitudin Quam Dolor Mollis</li>
                        <li className={styles.hFiveUlItemSetup}>
                            <FaRegDotCircle className={styles.faIconStyle} />
                            Diipiscing Vestibulum Nullam Venenatis</li>
                        <li className={styles.hFiveUlItemSetup}>
                            <FaRegDotCircle className={styles.faIconStyle} />
                            Diipiscing Vestibulum Nullam Venenatis</li>
                        <li className={styles.hFiveUlItemSetup}>
                            <FaRegDotCircle className={styles.faIconStyle} />
                            Vehicula Vulputate Ligula Mollis</li>

                    </ul>
                </div>

            </div>
            <div className="row">
                <div className={"col-md-4 " + styles.title}>
                    Feedback From Client
                </div>
                <div className="col-md-8">
                    <p className={styles.desOneSub}> We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include</p>

                    <p className={styles.desOneSub}>inTech Innovation Lab that keep us at the forefront of innovation. Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting .</p>
                </div>
            </div>
        </div>
    )
}
