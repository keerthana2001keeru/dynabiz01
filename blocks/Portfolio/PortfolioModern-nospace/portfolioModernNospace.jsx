import React from 'react'
import ImageFrame from '../../../components/Imgae-Frame/imageFrame';

export default function PortfolioModernNospace() {
    return (
        <div className='container-fluid p-0'>
            <div className='row p-3' style={{ paddingBottom: '20px' }}>
                <div className='col-12 col-md-4 p-0 m-0'>
                    <ImageFrame element={data} />
                </div>
                <div className='col-12 col-md-4 p-0 m-0'>
                    <ImageFrame element={data} />
                </div>
                <div className='col-12 col-md-4 p-0 m-0'>
                    <ImageFrame element={data} />
                </div>
                {/* <div className='col p-0 m-0'>
                    <ImageFrame element={data} />
                </div> */}
            </div>
        </div>
    )
}
var data = {
    hovercontent: false,
    heading: false,
    des: false
};