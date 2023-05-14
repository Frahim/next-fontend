import React from 'react';
import Footersvg from "../public/footer-bg.svg";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className='section--has-background'>
        <div className='footer-wrapper sectionPadding'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 col-md-4 footerWidget footerOne'>
                <h3 className='widgetTitle t-white'>MOST VISITED</h3>
              </div>
              <div className='col-sm-12 col-md-4 footerWidget footerTwo'>
                <h3 className='widgetTitle t-white'>FOLLOW</h3>
              </div>
              <div className='col-sm-12 col-md-4 footerWidget footerThree'>
                <h3 className='widgetTitle t-white'>CONTACT</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='copywright'>
        <div className='container'>

          <div className='copywrwp'>
            <Link href='/'>Conditions and declarations</Link>
            <span>|</span>
            <p>©2023 Bejo Zaden B.V. all rights reserved</p>

          </div>
        </div>
      </div>
    </>
  )
}
