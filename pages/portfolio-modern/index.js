import React from 'react'
import PortfolioModern from '../../blocks/Portfolio/PortfolioModern/portfolioModern'
import OurCaseListTwo from '../../layouts/OurCases/ourCaseListTwo'
import { getHttpService } from '../../utilities/http-service-helper';

import Head from 'next/head'
const topBanner =
{
  bgImage: '/uploads/single-blog-title.jpg',
  title: 'Portfolio Modern 3 Columns',
}
export default function Cases_portfolio_modern(props) {
  const userSettings = props?.uiSettings;
  return (
    <>
      <section className='main'>
        <div>
          <PortfolioModern></PortfolioModern>
          <PortfolioModern></PortfolioModern>
          <PortfolioModern></PortfolioModern>
        </div>
      </section>
    </>
  )
}
Cases_portfolio_modern.getLayout = function getLayout(page) {
  const userSetting = page?.props?.uiSettings;
  return (
    <OurCaseListTwo setCmp={topBanner} uiSettings={userSetting}>
      {page}
    </OurCaseListTwo>
  )
}

