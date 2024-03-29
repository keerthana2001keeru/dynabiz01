import React from 'react'
import styles from './priceTableBlkOne.module.scss'
import PriceTable from '../../components/PriceTable/priceTable'

const priceTable = [
    {
        crdStyle: 'cards',
        topSectionStyle: 'topSection',
        icon: 'FaRegLightbulb',
        topHeading: 'STARTER PLAN',
        topSubHeading: 'Suitable for starter',
        subSectionStyle: 'priceSection',
        subSectionContent: '9.90',
        listItems: [
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            }
        ],
        buttonStyle: 'btnOne',
        buttonText: 'Learn More'

    },
    {
        crdStyle: 'cardsTwo',
        topSectionStyle: 'topSectionTwo',
        icon: '',
        topHeading: 'ADVANCED PLAN',
        topSubHeading: 'Suitable for profession',
        subSectionStyle: 'priceSection',
        subSectionContent: '20',
        listItems: [
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            }
        ],
        buttonStyle: 'btnOneTwo',
        buttonText: 'Learn More'

    },
    {
        crdStyle: 'cards',
        topSectionStyle: 'topSection',
        icon: '',
        topHeading: 'ENTERPRISE PLAN',
        topSubHeading: 'Suitable for corporate',
        subSectionStyle: 'priceSection',
        subSectionContent: '50',
        listItems: [
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            }
        ],
        buttonStyle: 'btnOne',
        buttonText: 'Learn More'

    }
]

const priceTableTwo = [
    {
        crdStyle: 'cards',
        topSectionStyle: 'topSection',
        icon: 'FaRegLightbulb',
        topHeading: 'STARTER PLAN',
        topSubHeading: 'Suitable for starter',
        subSectionStyle: 'priceSection',
        subSectionContent: '9.90',
        listItems: [
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            }
        ],
        buttonStyle: 'btnOne',
        buttonText: 'Learn More'

    },
    {
        crdStyle: 'cards',
        topSectionStyle: 'topSection',
        icon: '',
        topHeading: 'ADVANCED PLAN',
        topSubHeading: 'Suitable for profession',
        subSectionStyle: 'priceSection',
        subSectionContent: '20',
        listItems: [
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            }
        ],
        buttonStyle: 'btnOne',
        buttonText: 'Learn More'

    },
    {
        crdStyle: 'cards',
        topSectionStyle: 'topSection',
        icon: '',
        topHeading: 'ENTERPRISE PLAN',
        topSubHeading: 'Suitable for corporate',
        subSectionStyle: 'priceSection',
        subSectionContent: '50',
        listItems: [
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            },
            {
                icon: 'FaCheck',
                itemText: 'List item here'
            }
        ],
        buttonStyle: 'btnOne',
        buttonText: 'Learn More'

    }
]
export default function PriceTableBlkOne(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }
    console.log("hh",HomeOneValue)
    return (
        <div className='container-fluid p-0'>
            <div style={HomeOneValue?.setCmp?.bgImage ? {
                backgroundImage: "url('/uploads/page-title-background.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: 'fixed'
            } : { backgroundColor: '$color_text_light_one' }}>
                <div className={"container-xxl " + styles.contanierSetup}>
                    <div className={styles.contentSet}>
                        <div className={styles[HomeOneValue?.setCmp?.smallTitleStyle]}>
                            Example of price table
                        </div>
                        <div className={styles[HomeOneValue?.setCmp?.titleStyle]}>
                            Price Table With Featured
                        </div>
                        <p className={styles[HomeOneValue?.setCmp?.contentStyle]}>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment.
                        </p>
                    </div>
                    {HomeOneValue?.setCmp?.bgImage ? <div className={'row ' + styles.cardSetup}>
                        {priceTableTwo.map((item) => {
                            return (
                                <div className='col-12 col-md-4'><PriceTable setCmp={item} /></div>
                            )
                        })}
                    </div> : <div className={'row ' + styles.cardSetup}>
                        {priceTable.map((item) => {
                            return (
                                <div className='col-12 col-md-4'><PriceTable setCmp={item} /></div>
                            )
                        })}
                    </div>}

                </div>
            </div>
        </div>
    )
}
