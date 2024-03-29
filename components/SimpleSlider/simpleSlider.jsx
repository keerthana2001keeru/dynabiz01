import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import styles from './simpleSlider.module.scss'

export default function SimpleSlider(props) {
    return (
        <div className='container-fluid p-0'>
            <div className={'text-center ' + styles.title}>
                <div className={styles.heading}>{props?.setCmp?.ClientTestimonialHeading?.heading?.value}</div>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="container-xxl carousel-inner">
                    {props?.setCmp?.ClientTestimonialQuote?.value?.map((item, index) => {
                        return (
                            <div className={"carousel-item text-center " + `${index == 0 ? 'active' : ''}`} key={index}>
                                <div className={styles.hEhtContentSet}>
                                    <h4 className={styles.hEhtDes}
                                     dangerouslySetInnerHTML={{
                                        __html: item?.quote?.value,
                                      }}  
                                    
                                    
                                    ></h4>
                                    <h5 className={styles.nameSection}>{item?.clientName?.value}
                                    </h5>
                                    <h6 className={styles.desigSection}>{item?.ClientDesignation?.value}</h6>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <button className={"carousel-control-prev " + styles.carouselControl} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className={styles.arrowBg} aria-hidden="true"> <MdOutlineKeyboardArrowLeft className={styles.arrowStyle} size={30} /> </span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className={"carousel-control-next " + styles.carouselControl} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className={styles.arrowBg} aria-hidden="true"> <MdOutlineKeyboardArrowRight className={styles.arrowStyle} size={30} /> </span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
