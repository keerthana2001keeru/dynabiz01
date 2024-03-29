import React from 'react'
import OverlayImgText from '../../components/OverlayImageWithText/overlayImgText'
import SideimgWithIcontext from '../../components/SideimgWithIcontext/sideimgWithIcontext'

export default function OurService() {
    return (
        <div className='container-fluid p-0'>
            <div className="row">
                <div className="col-md-6 col-12 p-0 order-2 order-md-1">
                    <OverlayImgText></OverlayImgText>
                </div>
                <div className="col-md-6 col-12 p-0 order-1 order-md-2">
                    <SideimgWithIcontext></SideimgWithIcontext>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-12 p-0">
                    <SideimgWithIcontext></SideimgWithIcontext>
                </div>
                <div className="col-md-6 col-12 p-0">
                    <OverlayImgText></OverlayImgText>
                </div>
            </div>
        </div>
    )
}
