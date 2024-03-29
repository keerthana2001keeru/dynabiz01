import React from 'react'
import styles from './imgwithicontext.module.scss'

export default function SideimgWithIcontext() {
    return (
        <div className='container-fluid p-0 h-100'>
            <div className='row h-100'>
                <div className='col-6 p-0'>
                    <div style={{
                        backgroundImage: "url('/uploads/shutterstock_361397258.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: 'cover',
                        height: '100%'
                    }}></div>
                </div>
                <div className={'col-6 p-0 text-center ' + styles.bgColorSetTwo}>
                    <div className={styles.contentSet}>
                        <img src="/uploads/hp3-service2-icon-1.png" alt="" />
                        <p className={styles.textStyle}>Analyzing</p>
                    </div>
                </div>
            </div>
        </div>
        // <div className='container-fluid p-0'>
        //     <div >
        //         <div style={{
        //             backgroundImage: "url('/uploads/shutterstock_361397258.jpg')",
        //             backgroundRepeat: "no-repeat",
        //             backgroundPosition: "center center",
        //             backgroundSize: 'cover',
        //         }}>
        //             {/* <img className='img-fluid' src='/uploads/shutterstock_361397258.jpg' alt=''></img> */}

        //             <div className='text-center'>
        //                 <div >
        //                     <img src="/uploads/hp3-service2-icon-1.png" alt="" />
        //                     <p className={styles.textStyle}>Analyzing</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
