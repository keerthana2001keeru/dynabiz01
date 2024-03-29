import React from 'react'
import styles from './imagetext.module.scss'
import { FaRegDotCircle } from 'react-icons/fa';

export default function ImageWrapText() {
    return (
        <div className='container-fluid p-0'>
            <div className='img-fluid' style={{
                backgroundImage: "url('/uploads/hp-1-service-title-bg-2.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "contain"
            }}>
                <div className={styles.headingSection}>
                    <div className={styles.titleText}>Capital Markets</div>
                    <p className={styles.subtitleText}>GLOBAL STRATEGIES, INSIGHT-DRIVEN TRANSFORMATION</p>
                </div>
            </div>
            <div className={`${styles.clearfloat} ${styles.textAlignSetup}`}>
                <img className={'img-fluid ' + styles.imageSetup} src="/uploads/shutterstock_247037281.jpg" alt="" />
                <p className={styles.textStyle}>Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement capabilities across all asset classes. This includes strategy, architecture design, operating model work, process improvement, systems building and trading package integration as well as application management, application outsourcing and business process outsourcing. More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include a powerful alliance network with leading capital markets software vendors, and programs such as the FinTech Innovation Lab that keep us at the forefront of innovation. Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement capabilities across all asset classes. This includes strategy, architecture design, operating model work, process improvement, systems building and trading package.</p>
            </div>
            <ul className={"list-unstyled " + styles.listStyleSet}>
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
    )
}
