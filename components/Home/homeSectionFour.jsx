import React from 'react'
import Slider from "react-slick";
import HomeCardOne from './homeCardOne';
import styles from './home.module.scss'
import Link from 'next/link';
import SliderWrapper from "../_SlickSliderStyle";


export default function HomeSectionFour(pageProps) {

    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
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
                    slidesToScroll: 1
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
        <div className={'container-fluid p-0 ' + styles.HfourSectionSetUp}
            style={{
                backgroundImage: `url(${HomeOneValue?.elements?.CasesSection?.backgroundImage?.value})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                // zIndex: '2'
            }}>
            <div className="row text-center">
                <h2 className={styles.HfourSectionTitle}>{HomeOneValue?.elements?.CasesSection?.heading?.value}
                </h2>
                <h5 className={styles.HfourSectionSubTitle}>{HomeOneValue?.elements?.CasesSection?.subHeading?.value}
                </h5>
            </div>
            <SliderWrapper>
                <Slider {...settings}>
                    {HomeOneValue?.elements?.CasesSectionCards?.value?.map((item, index) => {
                        return (
                            <div key={index}>
                                <HomeCardOne setCmp={item}></HomeCardOne>
                            </div>
                        )
                    })}
                </Slider>
            </SliderWrapper>
            {HomeOneValue?.elements?.CasesSection?.buttonText?.value && (
            <div className='text-center mt-5 mb-5'>
 <Link
                    href={
                        HomeOneValue?.elements?.CasesSection?.buttonLink?.urlType == "R"
                        ? "#" + HomeOneValue?.elements?.CasesSection?.buttonLink?.value || ""
                        : HomeOneValue?.elements?.CasesSection?.buttonLink?.value || ""
                    }
                    legacyBehavior
                    target={HomeOneValue?.elements?.CasesSection?.buttonLink?.urlType == "E" ? "_blank" : ""}
                  >



               
                    <button className={`${styles.HFourbuttonSetUp} ${styles.HfourBtnOne}`}>{HomeOneValue?.elements?.CasesSection?.buttonText?.value}</button>
                </Link>
            </div>
            )}
        </div>
        </section>
    )
}
