import React from 'react';
import Footersvg from "../public/footer-bg.svg";
import Image from 'next/image';
import Link from 'next/link';
import { GrFormNext, GrFacebookOption, GrTwitter,GrInstagram,GrYoutube,GrPinterest,GrMap, GrPhone, GrMailOption }from "react-icons/gr";

export default function Footer() {
  return (
    <>
      <div className='section--has-background'>
        <div className='footer-wrapper sectionPadding'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 col-md-4 footerWidget footerOne'>
                <h3 className='widgetTitle t-white'>MOST VISITED</h3>
                <ul className='footerNav'>
                 
                  <li>
                  <GrFormNext/><Link href="/">Exploring nature never stops</Link>
                  </li>
                  <li>
                    <GrFormNext/><Link href="/">Event</Link>
                  </li>
                  <li>
                   <GrFormNext/><Link href="/">Coolwrap - Cabbage rolls</Link>
                  </li>
                 
                  <li>
                    <GrFormNext/><Link href="/">Enever stops</Link>
                  </li>
                  <li>
                    <GrFormNext/><Link href="/">Event</Link>
                  </li>
                  <li>
                    <GrFormNext/><Link href="/">Coolwrap</Link>
                  </li>
                  <li>
                    <GrFormNext/><Link href="/">Cabbage rolls</Link> 
                  </li>
                </ul>
              </div>
              <div className='col-sm-12 col-md-4 footerWidget footerTwo'>
                <h3 className='widgetTitle t-white'>FOLLOW</h3>
                <ul className='socialmedia'>
                  <li>
                    <Link href='/' ><GrFacebookOption/></Link>
                  </li>
                  <li>
                    <Link href='/' ><GrTwitter/></Link>
                  </li>
                  <li>
                    <Link href='/' ><GrInstagram/></Link>
                  </li>
                  <li>
                    <Link href='/' ><GrYoutube/></Link>
                  </li>
                  <li>
                    <Link href='/' ><GrPinterest/></Link>
                  </li>
                  
                </ul>
              </div>
              <div className='col-sm-12 col-md-4 footerWidget footerThree'>
                <h3 className='widgetTitle t-white'>CONTACT</h3>
                <div className='address'>
                <GrMap/><span> House # 764-763/A, Avenue #06, Road #10,<br/> Mirpur DOHS, Dhaka</span>
                </div>
                <div className='mt-5 phone'>
                <GrPhone/><span className='phone-wrap'>
                    <Link href='tel:+8801779898444'>+8801779898444</Link>,
                    <Link href='tel:+8801779898555'>+8801779898555</Link>,
                    <Link href='tel:+8801984800900'>+8801984800900</Link>,
                    <Link href='tel:+8801954541313'>+8801954541313</Link>,
                    <Link href='tel:02-51053841'>02-51053841</Link>,
                    <Link href='tel:02-51053842'>02-51053842</Link>,
                    <Link href='tel:02-51053843'>02-51053843</Link>
                  
                  </span>
                </div>
                <div className='mt-5 eamil address'>
                  <GrMailOption/>
                  <Link href='mailto:+8801779898444'>admin@agrilfoods.com</Link>
                </div>
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
            <p>©2023 Agril Foods LTD. all rights reserved</p>

          </div>
        </div>
      </div>
    </>
  )
}
