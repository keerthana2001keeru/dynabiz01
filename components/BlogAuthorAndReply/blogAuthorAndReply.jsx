import React from 'react'
import styles from './blogAuthorAndReply.module.scss'
import { FaFacebookF, FaGooglePlusG, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

export default function BlogAuthorAndReply() {
    return (
        <div className='container-fluid p-0'>
            <div className={styles.mainContainerSet}>
                <div className={"text-center " + styles.sectionTop}>
                    <span className={styles.topSectionTitle}>
                        <span className={styles.prefixCount}> 0</span> SHARES
                    </span>
                    <span>
                        <FaFacebookF className={styles.icons} />
                        <FaGooglePlusG className={styles.icons} />
                        <FaPinterestP className={styles.icons} />
                        <FaTwitter className={styles.icons} />
                    </span>
                </div>
                <hr className={styles.hDivider} />
                <div className='text-center'>
                    <img className={styles.profileIMGOne} src="/uploads/67b587616031ee8e892e9418558406ed.png" alt="" />
                    <div className={styles.authorSet}>
                        <div className={styles.authorDes}>
                            About the author
                        </div>
                        <div className={styles.authorName}>
                            John Smith
                        </div>
                        <p className={styles.secondartText}>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                        </p>
                    </div>
                </div>
                <hr className={styles.hDivider} />
                <div className={'d-flex justify-content-between ' + styles.pageToggleSet}>
                    <span className={styles.replyBtn}>
                        <BsArrowLeft /> <span>prev</span>
                    </span>
                    <span className={styles.replyBtn}>
                        <span>next</span><BsArrowRight />
                    </span>
                </div>
                <hr className={styles.hDivider} />
                <div className={'text-center ' + styles.responseTitle}>
                    1 RESPONSE
                </div>
                <div className={'d-flex flex-wrap flex-md-nowrap ' + styles.replySet} >
                    <img className={styles.profileIMG} src="/uploads/67b587616031ee8e892e9418558406ed.png" alt="" />
                    <div className={'w-100 ' + styles.authorSectionTwo}>
                        <div className='d-flex justify-content-between'>
                            <div className={styles.authorName}>
                                John Smith
                            </div>
                            <div className={styles.replyBtn}>
                                REPLY
                            </div>
                        </div>
                        <div className={styles.authorDes}>
                            November 26, 2016 at 3:03 pm
                        </div>
                        <div className={styles.subText}>
                            Donec ullamcorper nulla non metus auctor fringilla.
                        </div>
                    </div>
                </div>
                <hr className={styles.hDivider} />
            </div>
        </div>
    )
}
