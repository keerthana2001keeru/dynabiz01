import React from 'react'
import styles from './modal.module.scss'
import { FaTimes, FaSearch } from 'react-icons/fa';


export default function Modal(props) {
    return (

        <div className={"modal fade " + styles.modalbackdrop} id={props?.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={"modal-dialog " + styles.modalWidth} style={{ margin: '0px' }}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <FaTimes style={{ color: '$color_text_light_one' }} className="btn-close" data-bs-dismiss="modal" />
                    </div>
                    {props.children}
                    {/* <div className="modal-body mx-auto">
                        <div className='d-flex'>
                            <form className="row g-3">
                                <div className="col">
                                    <input type="text" className={'py-3 ' + styles.contactFormInput} placeholder="Search ..." />
                                </div>
                            </form>
                            <FaSearch className={styles.iconSetup} style={{ color: '$color_text_light_one' }} />
                        </div>
                    </div> */}
                    <div className={styles.modalFooter}>
                    </div>
                </div>
            </div>
        </div >

    )
}
