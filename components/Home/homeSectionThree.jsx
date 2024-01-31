import Link from 'next/link';
import React from 'react'
import styles from './home.module.scss'


export default function HomeSectionThree(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    return (
        <section className='sec-mar'>
        <div className='container-fluid p-0'>
            <div
                className=""
                style={{
                    backgroundImage: `url(${HomeOneValue?.elements?.TalkToUsSection?.backgroundImage?.value})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: 'cover',
                    height: '298px'
                }}
            >
                <div className={'row ' + styles.HtreSectoinContentGrp}>
                    <div className='col-12 col-md-9'>
                        <h2 className={styles.HtreSectionTitle}>
                            {HomeOneValue?.elements?.TalkToUsSection?.heading?.value}
                        </h2>
                        <h4 className={styles.HtreSectionDes}>{HomeOneValue?.elements?.TalkToUsSection?.description?.value}
                        </h4>
                    </div>
                    {HomeOneValue?.elements?.TalkToUsSection?.buttonText?.value && (
                    <div className={'ms-auto pe-lg-5 col-12 col-md-3 ' + styles.btnSetup}>
                    <Link
                    href={
                        HomeOneValue?.elements?.TalkToUsSection?.buttonLink?.urlType == "R"
                        ? "#" + HomeOneValue?.elements?.TalkToUsSection?.buttonLink?.value || ""
                        : HomeOneValue?.elements?.TalkToUsSection?.buttonLink?.value || ""
                    }
                    legacyBehavior
                    target={HomeOneValue?.elements?.TalkToUsSection?.buttonLink?.urlType == "E" ? "_blank" : ""}
                  >

                            <button className={`${styles.HtrebuttonSetUp} ${styles.HtreBtnOne}`}>{HomeOneValue?.elements?.TalkToUsSection?.buttonText?.value}</button>
                        </Link>
                    </div>
                    )}
                </div>
            </div>
        </div>
        </section>
    )
}
