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
                y: 0,
                duration: 3,
                autoAlpha: 3,
            }
        );

    }, []);


    return (
        <>
            <div className={styles.slider} ref={ref}>
                <div className={styles.borderAnimation}></div>
                <div className={styles.bannerWrap}>
                    <div className={styles.backgroundVideo}>
                        <video muted autoPlay loop className=''>
                            <source src="./sunflowers-21530.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="container">
                    <div className='row'>
                        <div className="col-sm-12 col-md-8 mt-5 op-0 fadeUp">
                            <div className={`${styles.bannerTitle} `} >
                                <h1 className={`${istok.className}`}>Cultivating for a<br/> better future</h1>
                            </div>
                            <div className="col-1-1 no-p ">
                                <div className={`${styles.bannerDesc} fed`}>
                                    <p className={istok.className}> In publishing and graphic design, Lorem ipsum is a placeholder text<br/> commonly used to demonstrate the visual form of a document or a typeface without<br/> relying on meaningful content. </p>

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