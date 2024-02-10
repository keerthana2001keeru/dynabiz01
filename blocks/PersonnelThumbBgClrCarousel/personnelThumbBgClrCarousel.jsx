import React from 'react'
import Slider from 'react-slick/lib/slider';
import MemberCardThumbnail from '../../components/MemberCardThumbnail/memberCardThumbnail';
import styles from './personnelThumbBgClrCarousel.module.scss'


const memberList = [
    {
        image: '/uploads/personnel-1-400x310.jpg',
        title: 'Paul Walker',
        designation: 'Chief Executive Officer',
        socialLogos: true
    },
    {
        image: '/uploads/personnel-2-400x310.jpg',
        title: 'Jeanette Kingston',
        designation: 'Vice President',
        socialLogos: true
    },
    {
        image: '/uploads/personnel-3-400x310.jpg',
        title: 'John Smithy',
        designation: 'Chief Financial Officer',
        socialLogos: true
    },
    {
        image: '/uploads/personnel-4-400x310.jpg',
        title: 'Linda Kloe',
        designation: 'Senior Engineer',
        socialLogos: true
    },
    {
        image: '/uploads/personnel-5-400x310.jpg',
        title: 'Ricardo Gomez',
        designation: 'HR Manager',
        socialLogos: true
    },
    {
        image: '/uploads/personnel-6-400x310.jpg',
        title: 'Jeneth Kings',
        designation: 'Chief Technology Officer',
        socialLogos: true
    }
]

export default function PersonnelThumbBgClrCarousel(pageProps) {
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className='container-xxl p-0'>
            <div className={styles.headingGrpSetup}>

                <div className={"row pt-5 "}>
                    <div className={styles.headingSetup}>
                        <div className={styles.heading}>
                            {HomeOneValue?.elements?.TeamSection?.heading?.value}
                        </div>
                    </div>
                    <Slider {...settings}>
                        {HomeOneValue?.elements?.TeamMemberCards?.value?.map((item, index) => {
                            return (
                                <div className="col-12 col-md-4 py-3 px-2" key={index}>
                                    <MemberCardThumbnail setCmp={item} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </div>
        </div>
    )
}
