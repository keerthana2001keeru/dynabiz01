import React from 'react'
import styles from './addressMap.module.scss';

export default function MapWithAddress(props) {
    return (
        <div>
            <div className='container-fluid p-0'>
                <div className="row">
                    <div className={"col-md-6 p-0 m-0 " + styles.imageOverlay}>
                        <div className={styles.overlay}></div>
                        <div className="img-fluid" style={{
                            // backgroundImage: "url('/uploads/pexels-photo-374018-400x257.jpeg')",
                            backgroundImage: `url(${props?.setCmp?.BackgroundImage?.value})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            position: "relative",
                            backgroundSize: 'cover',
                        }}>
                            <div className={styles.addressGrpSetup}>
                                <h4 className={styles.titleStyl}>{props?.setCmp?.place?.value} </h4>
                                <hr className={styles.hDivider}></hr>
                                <h5 className={styles.addressStylOne}>{props?.setCmp?.Address?.value}
                                </h5>
                                <h5 className={styles.addressStylTwo}> {props?.setCmp?.phone?.value}</h5>
                                <h5 className={styles.addressStylTwo}> {props?.setCmp?.email?.value} </h5>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 p-0">
                        <iframe src={props?.mapValue?.mapLink?.value} height="100%" width="100%"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
