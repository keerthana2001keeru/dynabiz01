import React from 'react'
import PortfolioSingleCaseFive from '../../../components/PortfolioSingleCaseFive/portfolioSingleCaseFive'
import PortfolioSingleCaseSix from '../../../components/PortfolioSingleCaseSix/portfolioSingleCaseSix'

const portfolio = [
    {
        img: '/uploads/single-port-2-2-1.jpg',
        title: ' Help Monitoring',
        desOne: ' More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include a powerful alliance network with leading capital markets software vendors, and programs such as the FinTech Innovation Lab that keep us at the forefront of innovation. Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms.',
        desTwo: 'We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement. ',
        position: 'left'
    }
]

export default function SinglecaseBlockThree() {
    return (
        <div>
            <PortfolioSingleCaseFive />
            {portfolio?.map((item, index) => {
                return (
                    <PortfolioSingleCaseSix setcmpt={item} />
                )
            })}
        </div>
    )
}
