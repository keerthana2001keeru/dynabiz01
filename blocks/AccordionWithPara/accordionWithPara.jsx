import React from 'react'
import Accordion from '../../components/Accordion/accordion'
import SimpleParagraph from '../../components/SimpleParagraph/simpleParagraph'

export default function AccordionWithPara() {
    return (
        <section className='sec-mar'>
        <div className='container-fluid p-0'>
            <Accordion></Accordion>
            <div className='pt-4'><SimpleParagraph></SimpleParagraph></div>
        </div>

        </section>
    )
}
