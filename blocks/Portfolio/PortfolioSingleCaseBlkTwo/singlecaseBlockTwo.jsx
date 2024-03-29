import React from 'react'
import styles from './singlecaseBlockTwo.module.scss'
import CardtypeOne from '../../../components/CardTypeOne/cardtypeOne'
import PortfolioSingleCaseTwo from '../../../components/PortfolioSingleCaseTwo/portfolioSingleCaseTwo'
import PortfolioSingleCaseThree from '../../../components/PortfolioSingleCaseThree/portfolioSingleCaseThree'
import PortfolioSingleCaseSix from '../../../components/PortfolioSingleCaseSix/portfolioSingleCaseSix'


const portfolio = [
    {
        img: '/uploads/single-port-3-2.jpg',
        title: ' Result Driven',
        desOne: 'More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include a powerful alliance network with leading capital markets software vendors, and programs such as the FinTech Innovation Lab that keep us at the forefront of innovation. Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms. ',
        desTwo: 'We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement. ',
        position: 'right'
    }
]
const crds = [
    {
        icon: '/uploads/icon-1.png',
        heading: 'A Team Of Professionals.',
        content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics, omni-chan',
        iconStyle: 'HoneSectionIcon',
        headingStyle: 'HoneSectionTitle',
        contentStyle: 'HoneSectionDes'
    }
]
export default function SinglecaseBlockTwo() {
    return (
        <div>
            {/* <PortfolioSingleCaseTwo /> */}
            {portfolio?.map((item, index) => {
                return (
                    <PortfolioSingleCaseSix setcmpt={item} />
                )
            })}
            {crds.map((item) => {
                return (
                    <div className={'col-md-7 ' + styles.setStylecrd}><CardtypeOne setCmp={item} /></div>
                )
            })}
            <PortfolioSingleCaseThree />
        </div>
    )
}
