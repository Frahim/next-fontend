import React from 'react'

import styles from '../components/banner.module.css'
import { Istok_Web } from 'next/font/google';

function HomeBanner() {
    return (
        <>
        <div className={styles.slider}>
            <div className={styles.bannerWrap}>
                <div className={styles.backgroundVideo}>
                    <video muted autoPlay loop className=''>
                        <source src="https://vod-progressive.akamaized.net/exp=1683738550~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4171%2F14%2F370856289%2F1538510983.mp4~hmac=dfb3cf353a1130a3c11aee495c3425966ec2832a8da46a53e3bc9a548d509a32/vimeo-prod-skyfire-std-us/01/4171/14/370856289/1538510983.mp4" />
                    </video>
                </div>
            </div>

            <div className="container">
                <div className='row'> 
                <div className="col-sm-12 col-md-6 mt-5">
                        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className={styles.bannerTitle}>
                            <h1 className="btitle">Cultivating for a better future</h1>
                        </div>
                    <div className="col-1-1 no-p">
                            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800" className={styles.bannerDesc}>
                                <p>MENACO B.V. is a commercial vegetable seed company based in The Netherlands. We offer products of 3 commercials brands: Nickerson-Zwaan, DP Elite Zaden and Huizer Zaden.</p>

                            </div>
                    </div>
                </div>
                </div>
            </div>

            </div>
        </>
    )
}

export default HomeBanner