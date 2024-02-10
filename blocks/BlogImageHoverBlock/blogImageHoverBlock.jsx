import React from 'react'
import ImageHoverBlog from '../../components/ImageHoverBlog/imageHoverBlog'



// const dataSet = [
//     {
//         img: '/uploads/pexels-photo-529923-400x257.jpeg',
//         title: ' I sink under the weight',
//         subTitle: 'June 6, 2016',
//         name: ''
//     },
//     {
//         img: '/uploads/pexels-photo-374018-400x257.jpeg',
//         title: ' Possession of my entire soul',
//         subTitle: 'June 6, 2016',
//         name: ''
//     },
//     {
//         img: '/uploads/pexels-photo-400x257.jpg',
//         title: ' I am so happy, my dear friend',
//         subTitle: 'June 6, 2016',
//         name: ''
//     },
//     {
//         img: '/uploads/pexels-photo-515169-400x257.jpeg',
//         title: ' Pityful a rethoric question ran',
//         subTitle: 'June 6, 2016',
//         name: ''
//     },
//     {
//         img: '/uploads/pexels-photo-106344-400x257.jpeg',
//         title: ' Even the all-powerful Pointing',
//         subTitle: 'June 6, 2016',
//         name: ''
//     },
//     {
//         img: '/uploads/pexels-photo-374018-400x257.jpeg',
//         title: ' Separated they live in Bookmarks',
//         subTitle: 'June 6, 2016',
//         name: ''
//     },
//     {
//         img: '/uploads/pexels-photo-400x257.jpg',
//         title: ' The Surfing Man Will Blow Your Mind',
//         subTitle: 'June 6, 2016',
//         name: ''
//     },
//     {
//         img: '/uploads/pexels-photo-529923-400x257.jpeg',
//         title: ' Help Monitoring',
//         subTitle: 'June 6, 2016',
//         name: ''
//     }

// ]
export default function BlogImageHoverBlock(props) {
    return (
        <div className='container-fluid'>
            <div className='row g-4 py-3'>
                {props?.setData?.map((item, index) => {
                    return (
                        <div className={props?.setCmp?.colStyle}><ImageHoverBlog setcmpt={item} /></div>
                    )
                })}
            </div>
        </div>
    )
}
