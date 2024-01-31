import React from 'react'
import Slider from "react-slick";
import SliderWrapper from "../_SlickSliderStyle";
import HomeCardTwo from './homeCardTwo';
import styles from './home.module.scss'


export default function HomeSectionSeven(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ],
        appendDots: dots => (
            <div>
                <ul > {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        )
    };

    return (
        <section className='sec-mar'>
        <div className='container-fluid p-0'>
            <div style={{
                backgroundImage: `url(${HomeOneValue?.elements?.LatestNewsSection?.backgroundImage?.value})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                // transform: "translate(0px, 8.06563px)"
            }}>
                <div className="row text-center">
                    <h2 className={styles.HsevenSectionTitle}>{HomeOneValue?.elements?.LatestNewsSection?.heading?.value}
                    </h2>
                    <h5 className={styles.HsevenSectionSubTitle}>{HomeOneValue?.elements?.LatestNewsSection?.subHeading?.value}
                    </h5>
                </div>
                <div>
                    <SliderWrapper>
                        <Slider {...settings}>
                            {HomeOneValue?.elements?.LatestNewsCards?.value?.map((item, index) => {
                                return (
                                    <div key={index}><HomeCardTwo setCmp={item} /></div>
                                )
                            })}
                        </Slider>
                    </SliderWrapper>
                </div>
            </div>
        </div>
        </section>
    )
}
