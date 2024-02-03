import React from 'react'
import CounterBgSet from '../../components/Counter/counterBgSet'
import SimpleListTwoColumn from '../../components/SimpleListTwoColumn/simpleListTwoColumn'
import styles from "./aboutUsThreeBlkTwo.module.scss"


const setdata = [
    {
        mainTitle: 'The Best Of Financial Corp',
        subtitle: 'Forbes Mag, 2014'
    },
    {
        mainTitle: 'Fintech Rookie',
        subtitle: 'Technologo Mag, 2015'
    },
    {
        mainTitle: 'Silver Price, Highest Return Portfolio',
        subtitle: 'Morningstar Award, 2016'
    },
    {
        mainTitle: 'Best Consult Company',
        subtitle: 'London Fund Associate, 2016'
    },
    {
        mainTitle: 'The Best Of Financial Corp',
        subtitle: 'Forbes Mag, 2014'
    },
    {
        mainTitle: 'Fintech Rookie',
        subtitle: 'Technologo Mag, 2015'
    },
    {
        mainTitle: 'Silver Price, Highest Return Portfolio',
        subtitle: 'Morningstar Award, 2016'
    },
    {
        mainTitle: 'Best Consult Company',
        subtitle: 'London Fund Associate, 2016'
    }
]
export default function AboutUsThreeBlkTwo(pageProps) {
    let HomeOneValue = {};
    if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
        HomeOneValue = pageProps?.uiLayout;
    } else {
        // aboutValue = require("./mapping.json");
    }
    return (
        <section className='sec-mar'>
        <div className='container-fluid p-0'>
            <div className={styles.containerSetup}>
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className={styles.title}>
                                {HomeOneValue?.elements?.AboutUsThreeSectionFive?.heading?.value}
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className={styles.contentSet}>
                                {HomeOneValue?.elements?.AwardSectionText?.value?.map((item) => {
                                    return (
                                        <SimpleListTwoColumn setCmp={item} />
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <CounterBgSet setCmp={HomeOneValue?.elements} />
        </div>
        </section>
    )
}
