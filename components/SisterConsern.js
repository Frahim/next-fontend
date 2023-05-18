"use client"
import React, { useEffect } from "react";
import Image from 'next/image';

import Agril from '../public/agrillogo_03.png';
import kingfeed from '../public/kingfeedLogo.png';

import gorgic from '../public/Georgiclogo.png'
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GrFormNextLink } from "react-icons/gr";



import { Mogra } from '@next/font/google';
const mogra = Mogra({ subsets: ['latin'], weight: ['400'] })

export default function SisterConcern() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = document.querySelectorAll(".slideRighr");
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 100
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: element,

        }
      }
    );
  }, []);

  useEffect(() => {
    const element = document.querySelectorAll(".slideRight2");
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 400
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: element,

        }
      }
    );
  }, []);
  useEffect(() => {
    const element = document.querySelectorAll(".slideleft2");
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 400,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: element,
          once: true
        }
      }
    );
  }, []);
  useEffect(() => {
    const element = document.querySelectorAll(".fadeUP");
    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        y: 50
      }, {
      scrollTrigger: {
        trigger: element,
        once: true
      },
      duration: 1,
      autoAlpha: 1,
      y: 0
    });
  }, []);


  return (
    <div className='wrapper sectionPadding first' >
      <div className='container'>
        <div className='row g-0 align'>
          <div className='col-sm-12 col-md-4 first_item sliderighr1' >
            <div className='wrapper-sec bg-gray'>
              <Image className="mw-200 kingsLogo" width={150} alt="leeerob" src={Agril} />
              <h2 className={`${mogra.className} sisFirstTitle`}>Who we are</h2>
              <Link className="nextpage-link" href="/agrilFoods">
                <GrFormNextLink className='nextpage-icon' />
              </Link>

            </div>
          </div>
          <div className='col-sm-12 col-md-4 scond_item'>
            <div className='wrapper-sec bg-white'>
              <h3 className={mogra.className}> Agril Foods LTD</h3>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. </p>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. </p>
            </div>
          </div>
          <div className='col-sm-12 col-md-4 third_item align-self-center slideLeft'>
            <div className='wrapper-sec bg-dark'>
              <h3 className={`${mogra.className} t-antiquewhite`}> Our people</h3>
              <p className='t-antiquewhite'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. </p>
            </div>
          </div>
        </div>

        <div className='row g-0 my-5' >
          <div className='col-sm-12 col-md-4 scond_item slideRight2'>
            <div className='wrapper-sec bg-white scwrwp'>
              <Image className="sislogo" width={200} alt="leeerob" src={kingfeed} />
              <Link className="sister-link" href="/kingfeed">
                <span className='sisName'> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of . </span>
                <GrFormNextLink className='sister-icon' />
              </Link>
            </div>
          </div>

          <div className='col-sm-12 col-md-4 first_item fadeUP'>
            <div className='wrapper-sec bg-dark'>
              <h2 className={`${mogra.className} t-white fs-40`}>Our Other <br />Brands</h2>
            </div>
          </div>

          <div className='col-sm-12 col-md-4 third_item align-self-center slideleft2'>
            <div className='wrapper-sec bg-white scwrwp'>
              <Image className="sislogo" width={200} alt="leeerob" src={gorgic} />
              <Link className="sister-link" href="/georgicabd">
                <span className='sisName'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of .</span>
                <GrFormNextLink className='sister-icon' />
              </Link>             
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
