"use client";
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import Footer from '../components/Footer';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Istok_Web } from '@next/font/google';
const istok = Istok_Web({
  subsets: ['latin'],
  weight: ['400', '700']
})

import { Exo } from 'next/font/google';
const exo = Exo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})




export default function RootLayout({ children }: { children: React.ReactNode, }) {


  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelectorAll(".sliderighr1"),
      {
        opacity: 0,
        x: 100
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector(".sliderighr1"),

        }
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelectorAll(".slideLeft"),
      {
        opacity: 0,
        x: -100,

      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector(".slideLeft"),

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
        x: 100
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element,

        }
      }
    );
  }, []);



  useEffect(() => {
    const items = document.querySelectorAll(".number");

    gsap.from(items, {
      textContent: 0,
      duration: 4,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: {
        each: 1.0,
        onUpdate: function () {
          this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
        },
      },
      scrollTrigger: {
        trigger: items,
      }
    });

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }, []);


  return (

    <html lang='en'>
      <body ref={ref}>
       
        {children}
        <Footer />
      </body>
    </html>
  );
}


