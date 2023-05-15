"use client";
import React from 'react';
import styles from '../components/banner.module.css';
import { Istok_Web } from '@next/font/google';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const istok = Istok_Web({
    subsets: ['latin'],
    weight: ['400', '700']
})

function HomeBanner() {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".fadeUp"),
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0
            }
        );
        
    }, []);


    return (
        <>
            <div className={styles.slider} ref={ref}>
                <div className={styles.bannerWrap}>
                    <div className={styles.backgroundVideo}>
                        <video muted autoPlay loop className=''>
                            <source src="https://vod-progressive.akamaized.net/exp=1683738550~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4171%2F14%2F370856289%2F1538510983.mp4~hmac=dfb3cf353a1130a3c11aee495c3425966ec2832a8da46a53e3bc9a548d509a32/vimeo-prod-skyfire-std-us/01/4171/14/370856289/1538510983.mp4" />
                        </video>
                    </div>
                </div>

                <div className="container">
                    <div className='row'>
                        <div className="col-sm-12 col-md-5 mt-5 op-0 fadeUp">
                            <div className= {`${styles.bannerTitle} `} >
                                <h1 className={`${istok.className}`}>Cultivating for a better future</h1>
                            </div>
                            <div className="col-1-1 no-p ">
                                <div  className={`${styles.bannerDesc} fed`}>
                                    <p className={istok.className}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>

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