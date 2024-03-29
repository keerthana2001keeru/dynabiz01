import React from 'react'
import MapWithAddress from '../../components/MapWithAddress/mapWithAddress'


export default function MapaddressBlock(props) {
    let HomeOneValue = {};
    if (props?.uiLayout && props?.uiLayout?.blockId) {
      HomeOneValue = props?.uiLayout;
    } else {
      // aboutValue = require("./mapping.json");
    }
    console.log("RR",HomeOneValue)
    var map = HomeOneValue?.elements?.Map;

    return (
        <div className='row p-0 col-lg-12 col-md-12'>
             {HomeOneValue?.elements?.MapWithAddress?.value?.map((item, index) => {
                                return (

                                    <>
                                    <div key={index} className='col-lg-6'><MapWithAddress setCmp={item} mapValue={map}/></div>
                                    {/* <div key ={index} className="col-12 col-md-6 p-0 m-0"><MapWithAddress /></div> */}
                                    </>
                                )
                            })}
         
        </div>
    )
}
