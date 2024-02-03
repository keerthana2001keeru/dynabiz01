import React from 'react'
import styles from './comingSoon.module.scss'

export default function ComingSoonPage(props) {
    // const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className='container-fluid p-0'>
            <div className={styles.overlayMain}>
                <div className={styles.overlay}></div>
                <div className={styles.imageSetupBG} style={{
                    backgroundImage: `url(${props?.setCmp[0]?.elements?.comingSoon?.BackgroundImage?.value})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    // height: '100vh'
                    // backgroundAttachment: 'fixed'
                }}>
                    <div className={styles.containerSetup}>
                        <div className={'text-center ' + styles.lineTxt}>
                            {props?.setCmp[0]?.elements?.comingSoon?.subTitle?.value}
                        </div>
                        <div className={'text-center ' + styles.comingSoonText}>
                            {props?.setCmp[0]?.elements?.comingSoon?.Title?.value}
                        </div>
                        <hr className={styles.hDivider}></hr>
                        <div className={styles.newsLettr}>
                            {props?.setCmp[0]?.elements?.comingSoon?.description?.value}
                        </div>

                        <div className={'text-center ' + styles.newsletterSetup}>
                            <form className="input-group mt-4" style={{ justifyContent: 'center' }}>
                                <input type="email" className={'py-2 ' + styles.footerFormInput} id="inputEmail4" placeholder="Your Email Address" />
                                < div className="input-group-append">
                                    <button className={`${styles.btnSetUp} ${styles.btnOneTwo}`}>{props?.setCmp[0]?.elements?.comingSoon?.newsletter?.value}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
