import React from 'react'
import Slider from 'react-slick/lib/slider';
import MemberCardWithFrame from '../../components/MemberCardWithFrame/memberCardWithFrame'
import SliderWrapper from '../../components/_SlickSliderStyle';
import styles from './teamListCardCarouselBlock.module.scss'

const memberList = [
    {
        image: '/uploads/personnel-1-400x310.jpg',
        title: 'Paul Walker',
        designation: 'Chief Executive Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel'
    },
    {
        image: '/uploads/personnel-2-400x310.jpg',
        title: 'Jeanette Kingston',
        designation: 'Vice President',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel'
    },
    {
        image: '/uploads/personnel-3-400x310.jpg',
        title: 'John Smithy',
        designation: 'Chief Financial Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel'
    },
    {
        image: '/uploads/personnel-4-400x310.jpg',
        title: 'Linda Kloe',
        designation: 'Senior Engineer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel'
    },
    {
        image: '/uploads/personnel-5-400x310.jpg',
        title: 'Ricardo Gomez',
        designation: 'HR Manager',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel'
    },
    {
        image: '/uploads/personnel-6-400x310.jpg',
        title: 'Jeneth Kings',
        designation: 'Chief Technology Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel'
    }
]

export default function TeamListCardCarouselBlock(pageProps) {

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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        appendDots: dots => (
            <div style={{ marginBottom: '-26px' }}>
                <ul> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        )
    };

    return (
        <section>
        <div className='container-xxl p-0'>
            <div style={{
                backgroundImage: `url(${HomeOneValue?.elements?.AboutUsFourSection?.backgroundImage?.value})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                zIndex: '2'
            }}>
                <div className='pb-5'>
                    <div className="text-center">
                        <h2 className={styles.SectionTitle}>{HomeOneValue?.elements?.AboutUsFourSection?.heading?.value}
                        </h2>
                    </div>
                    <div className="row">
                        <SliderWrapper>
                            <Slider {...settings}>
                                {HomeOneValue?.elements?.AboutUsTeamCards?.value?.map((item, index) => {
                                    return (
                                        <div className='col-12 col-md-4' key={index}><MemberCardWithFrame setCmp={item} /></div>
                                    )
                                })}
                            </Slider>
                        </SliderWrapper>
                    </div>
                </div>

            </div>
        </div>
        </section>
    )
}
