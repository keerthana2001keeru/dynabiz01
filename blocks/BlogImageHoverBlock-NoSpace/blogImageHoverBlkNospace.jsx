import React from 'react'
import ImageHoverBlog from '../../components/ImageHoverBlog/imageHoverBlog'


export default function BlogImageHoverBlkNospace(props) {
   // console.log(props)
    return (
        <div className='container-fluid p-0'>
            <div className='row'>
                {props?.setData?.map((item, index) => {
                    return (
                        <div className={'p-0 m-0 ' + props?.setCmp?.colStyle}><ImageHoverBlog setcmpt={item} /></div>
                    )
                })}
            </div>
        </div>
    )
}
