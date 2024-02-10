import React from 'react'
import ImageFrame from '../../../components/Imgae-Frame/imageFrame'


export default function PortfolioColFrame() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <ImageFrame element={data} ></ImageFrame>
                </div>
                <div className='col'>
                    <ImageFrame element={data}></ImageFrame>
                </div>
                <div className='col'>
                    <ImageFrame element={data}></ImageFrame>
                </div>
            </div>
        </div>
    )
}
var data = {
    hovercontent: false,
    heading: true,
    des: false
}