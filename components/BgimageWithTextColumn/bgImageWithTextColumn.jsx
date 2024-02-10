import React from 'react'
import styles from './bgImageWithTextColumn.module.scss'

export default function BgImageWithTextColumn(props) {
   const career = props?.setCmp;
    console.log("ppp",career)
    return (
        <section>
        <div className='container-fluid p-0 '>
            <div style={{
 backgroundImage: `url(${career?.backgroundImage?.value})`,
                // backgroundImage: "url('/uploads/about-career-bg-2.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: 'cover',
            }}>
                <div className='container-xxl'>
                    <div className={"row " + styles.contentSet}>
                        <div className={"col-md-4 " + styles.title}>
                           {career?.heading?.value}
                        </div>
                        <div className={"col-md-8 " + styles.content}>
                        {career?.Text?.value}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
