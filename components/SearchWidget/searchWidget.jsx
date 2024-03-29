import React from 'react'
import styles from './searchWidget.module.scss'
import { FaSearch } from 'react-icons/fa'

export default function SearchWidget() {
    return (
        <div className={styles.sectionSetup}>
            {/* <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search" />
            </div> */}
            <form>
                <input type="input" className={'py-2 ' + styles.footerFormInput} id="inputEmail4" placeholder="Search..." />
            </form>

        </div>
    )
}
