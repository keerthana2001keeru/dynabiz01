import { isAssetError } from 'next/dist/client/route-loader'
import React from 'react'
import CardtypeOne from '../../components/CardTypeOne/cardtypeOne'


const crds = [
    {
        icon: '/uploads/icon-1.png',
        heading: 'A Team Of Professionals.',
        content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics, omni-chan',
        iconStyle: 'HoneSectionIcon',
        headingStyle: 'HoneSectionTitle',
        contentStyle: 'HoneSectionDes'
    },
    {
        icon: '/uploads/icon-2.png',
        heading: 'Analyze Your Business.',
        content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics, omni-chan',
        iconStyle: 'HoneSectionIcon',
        headingStyle: 'HoneSectionTitle',
        contentStyle: 'HoneSectionDes'
    }
]

export default function OurServiceCardSet() {
    return (
        <div className='container-fluid p-0'>
            <div className='row pt-5 pb-1'>
                {crds.map((item) => {
                    return (
                        <div className='col-md-6'>
                            <CardtypeOne setCmp={item} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
