import React from 'react'
import Slider from 'react-slick/lib/slider';
import MemberCard from '../../components/MemberCard/memberCard';
import styles from './personnelCarouselNoFrame.module.scss'


export default function PersonnelCarouselNoFrame(pageProps) {

    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                `${styles.slickPrev} ${styles.slickArrow}`
            }
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            Previous
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                `${styles.slickNext} ${styles.slickArrow}`
            }
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            Next
        </button>
    );

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className='container-fluid p-0'>
            <div className={styles.overlayMain}>
                <div className={styles.overlay}></div>
                <div className={styles.bgImage} style={{
                    backgroundImage: `url(${HomeOneValue?.elements?.TeamSection?.BackgroundImage?.value})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundAttachment: 'fixed',
                }}>
                    <div className={'container-xxl ' + styles.headingGrpSetup}>

                        <div className={"row pt-5 " + styles.visibleSetup}>
                            <div className={styles.headingSetup}>
                                <div className={styles.smallHeading}>
                                    {HomeOneValue?.elements?.TeamSection?.Subheading?.value}
                                </div>
                                <div className={styles.heading}>
                                    {HomeOneValue?.elements?.TeamSection?.heading?.value}
                                </div>
                            </div>
                            <Slider {...settings}>
                                {HomeOneValue?.elements?.TeamMemberCards?.value?.map((item) => {
                                    return (
                                        <div className="col-12 col-md-3 p-0 m-0">
                                            <MemberCard setCmp={item} setStyle={HomeOneValue?.elements?.TeamMemberCards?.style} />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}
