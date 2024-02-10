import React from 'react'
import HomeCardOne from '../../../components/Home/homeCardOne'
import ImageFrame from '../../../components/Imgae-Frame/imageFrame'

export default function PortfolioColumn() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <ImageFrame element={data} />
                </div>
                <div className='col'>
                    <ImageFrame element={data} />
                </div>
                <div className='col'>
                    <ImageFrame element={data} />
                </div>
                <div className='col'>
                    <ImageFrame element={data} />
                </div>
            </div>

        </div>
    )
}
var data = {
    hovercontent: false,
    heading: true,
    des: true
}