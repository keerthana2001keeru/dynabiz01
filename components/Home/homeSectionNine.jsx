import React from 'react'
import styles from './home.module.scss'
import VisibilitySensor from "react-visibility-sensor";
import CountUp from 'react-countup';


export default function HomeSectionNine(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    return (
        <section className='sec-mar'>
        <div className='container-fluid p-0' style={{ backgroundColor: '$color_text_light_onesmoke' }}>
            <div style={{
                backgroundImage: `url(${HomeOneValue?.elements?.SuccessStatusSection?.backgroundImage?.value})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
            }}>
                <div className={"row text-center " + styles.hNineContentSet}>
                    <h2 className={styles.hNineTitle}>{HomeOneValue?.elements?.SuccessStatusSection?.heading?.value}</h2>
                    <h5 className={styles.hNineSubTitle}>{HomeOneValue?.elements?.SuccessStatusSection?.subHeading?.value}</h5>
                </div>
                <div className={'card shadow-sm bg-body ' + styles.hNineCrdSetup}>
                    <div className='card-body'>
                        <div className={"row " + styles.hNineCrdContentSet}>
                            {HomeOneValue?.elements?.successStatusCounter?.value?.map((item, index) => {
                                return (
                                    <div className="col text-center" key={index}>
                                        <h4 className={styles.hNineCrdMainContent}>
                                            <CountUp start={item?.countStartRange?.value} end={item?.CountEndRange?.value} duration={2.5} decimals={0}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start}>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </h4>
                                        <h6 className={styles.hNineCrdSubContent}>{item?.textContent?.value}</h6>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
