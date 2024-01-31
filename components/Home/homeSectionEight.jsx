import React from 'react'
import styles from './home.module.scss'


export default function HomeSectionEight(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    return (
        <section className='sec-mar'>
        <div className='container-fluid p-0 pt-5'>
            <div style={{
                backgroundImage: `url(${HomeOneValue?.elements?.ClientTestimonial?.backgroundImage?.value})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "524.45px",
                transform: "translate(0px, 8.06563px)"
            }}>
                <div className={'text-center ' + styles.hEhtTitle}>
                    <h1 className={styles.heading}>{HomeOneValue?.elements?.ClientTestimonial?.heading?.value}</h1>
                </div>

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className={"carousel-indicators " + styles.carouselIndicator}>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        {HomeOneValue?.elements?.ClientTestimonialQuote?.value?.map((item, index) => {
                            return (
                                <div className={"carousel-item text-center " + `${index == 0 ? 'active' : ''}`} key={index}>
                                    <div className={styles.hEhtContentSet}>
                                        <h4 className={styles.hEhtDes}
                                        dangerouslySetInnerHTML={{
                                            __html: item?.quote?.value,
                                          }}
                                    
                                        >
                                        </h4>
                                        <h5 className={styles.hEhtNameSection}>{item?.clientName?.value}
                                        </h5>
                                        <h6 className={styles.hEhtDesigSection}>{item?.ClientDesignation?.value}</h6>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div >
        </section>
    )
}
