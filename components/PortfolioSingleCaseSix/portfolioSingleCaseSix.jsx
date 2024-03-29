import React from 'react'
import styles from './portfoliosingleCasesix.module.scss'

export default function PortfolioSingleCaseSix(props) {
    var setposition = props?.setcmpt?.position;

    // console.log(setposition)
    return (
        <div className='container-fluid'>
            <div className="row pt-5">
                <div className={setposition == "left" ? 'col-12 col-md-5 text-center order-md-1' : 'col-12 col-md-5 text-center order-md-2'}>
                    <img className={'center-block ' + styles.imgs} src={props?.setcmpt?.img} alt="" />
                </div>
                <div className={setposition == "left" ? 'col-12 col-md-7 order-md-2' : 'col-12 col-md-7 order-md-1'}>
                    <div className={styles.setContentGrp}>
                        <div className={styles.title}>
                            {props?.setcmpt?.title}
                        </div>
                        <div className={styles.description}>
                            {props?.setcmpt?.desOne}
                        </div>
                        <div className={styles.descriptionTwo}>
                            {props?.setcmpt?.desTwo}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
