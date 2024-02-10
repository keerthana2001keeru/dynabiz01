import React from 'react'
import ImageFrame from '../../../components/Imgae-Frame/imageFrame'

export default function PortfolioColNospace() {
    return (
        <div className='container-fluid'>
            <div className='row p-3'>
                <div className='col-12 col-md-4 p-0 m-0'>
                    <ImageFrame element={data} ></ImageFrame>
                </div>
                <div className='col-12 col-md-4 p-0 m-0'>
                    <ImageFrame element={data}></ImageFrame>
                </div>
                <div className='col-12 col-md-4 p-0 m-0'>
                    <ImageFrame element={data}></ImageFrame>
                </div>
                {/* <div className='col-3 p-0 m-0'>
                    <ImageFrame element={data}></ImageFrame>
                </div> */}
            </div>
        </div>
    )
}

const col = 3;
var data = {
    hovercontent: null,
    heading: null,
    des: null
};

if (col == 4) {
    data = {
        hovercontent: false,
        heading: true,
        des: true,
    }
} else if (col == 3 || col == 2) {
    data = {
        hovercontent: false,
        heading: true,
        des: false
    }
}   
