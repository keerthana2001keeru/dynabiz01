import React from 'react'
import PortfolioSingleCasefour from '../../../components/PortfolioSingleCaseFour/portfolioSingleCasefour'
import PortfolioSingleCaseThree from '../../../components/PortfolioSingleCaseThree/portfolioSingleCaseThree'


export default function SingleCaseBlockFour() {
    return (
        <div>
            <PortfolioSingleCasefour />
            <div className='pt-3'> <PortfolioSingleCaseThree /></div>

        </div>
    )
}
