import React from 'react'
import styles from './blogReplayForm.module.scss'

export default function BlogReplayForm() {
    return (
        <div className='container-fluid p-0'>
            <div className={styles.mainContainer}>
                <div className={styles.title}>
                    LEAVE A REPLY
                </div>
                <div className={styles.blogFrmAlignSetup}>
                    <form className="row g-3">
                        <div className="col-12">
                            <textarea className={'py-3 ' + styles.blogFormInput} id="exampleFormControlTextarea1" rows="6" placeholder="Message*"></textarea>
                        </div>
                        <div className="col-md-6">
                            <input type="email" className={'py-3 ' + styles.blogFormInput} id="inputEmail4" placeholder="Full Name*" />
                        </div>
                        <div className="col-md-6">
                            <input type="password" className={'py-3 ' + styles.blogFormInput} id="inputPassword4" placeholder="Email*" />
                        </div>
                        <div className="col-12">
                            <input type="text" className={'py-3 ' + styles.blogFormInput} id="inputAddress" placeholder="Website" />
                        </div>

                        <div className="form-check" style={{ paddingLeft: '2.5em' }}>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className={styles.saveData} for="flexCheckDefault">
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                        </div>

                        <div className="col-12 d-flex justify-content-center pb-4">
                            <button type="submit" className={`${styles.blogBtnSetUp} ${styles.blogBtn}`}>Post Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
