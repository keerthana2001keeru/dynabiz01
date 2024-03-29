import React from 'react'
import styles from './logoSlider.module.scss'
import Slider from 'react-slick/lib/slider';

export default function LogoSlider(props) {


    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
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
        ]
    };

    return (
        <div className='container-fluid p-0'>
            <div className={"row " + styles.hSixIocnSetup}>
                <Slider {...settings}>
                    {props?.setCmp?.value?.map((item, index) => {
                        return (
                            <div className="col text-center" key={index}>
                                <img src={item?.logo?.value} alt="" />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
