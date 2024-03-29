import React from 'react'
import Footer from '../../components/footer'
import PersonnelTopbar from '../../components/PersonnelTopBar/personnelTopbar'

export default function Personnels(props) {
    return (
        <div>
            <PersonnelTopbar setCmp={props?.setCmp} setMember={props?.setMember} uiSettings={props?.uiSettings?.TH00025P20} />
            {props.children}
            <Footer uiSettings={props?.uiSettings?.TH00025P21} />
        </div>
    )
}
