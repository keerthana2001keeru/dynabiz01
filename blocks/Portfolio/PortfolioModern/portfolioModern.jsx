import React from 'react'
import ImageFrame from '../../../components/Imgae-Frame/imageFrame'

export default function PortfolioModern() {
    return (
        <div className='container-fluid'>
            <div className='row' style={{ paddingBottom: '20px' }}>
                <div className='col-12 col-md-4'>
                    <ImageFrame element={data} />
                </div>
                <div className='col-12 col-md-4'>
                    <ImageFrame element={data} />
                </div>
                <div className='col-12 col-md-4'>
                    <ImageFrame element={data} />
                </div>
            </div>
        </div>
    )
}
var data = {
    hovercontent: false,
    heading: false,
    des: false
};
