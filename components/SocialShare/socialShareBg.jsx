import React from 'react'
import { FaFacebookF, FaInstagram, FaGooglePlusG, FaPinterestP, FaTwitter } from 'react-icons/fa';
import styles from './socialShareBg.module.scss';

export default function SocialShareBg() {
    return (
        <div>
            <div className='container-fluid'>
                <div className={styles.iconConfigSet}>
                    <ul className={"d-flex justify-content-center " + styles.listDot}>
                        <li>
                            <a className={styles.setFabIconColor} href="#"><FaFacebookF /></a>
                        </li>
                        <li>
                            <a className={" " + styles.setFabIconColor} href="#"><FaGooglePlusG /></a>
                        </li>
                        <li>
                            <a className={" " + styles.setFabIconColor} href="#"><FaPinterestP /></a>
                        </li>
                        <li>
                            <a className={" " + styles.setFabIconColor} href="#"><FaTwitter /></a>
                        </li>
                        <li>
                            <a className={" " + styles.setFabIconColor} href="#"><FaInstagram /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
