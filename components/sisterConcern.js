import React from 'react'
import Image from 'next/image';
import whoicon from '../public/whoweare.png';
import Logo from '../public/logo.webp';
import Arrow from '../public/arow.svg'
import Link from 'next/link';



export default function sisterConcern() {
  return (
    <div className='wrapper sectionPadding'>
      <div className='container'>
        <div className='row g-0'>
          <div className='col-sm-12 col-md-4 first_item'>
            <div className='wrapper-sec bg-gray'>
              <Image className="mw-200" width={100} alt="leeerob" src={Logo} />
              <h2 className='sisFirstTitle'>Who we are</h2>
              <Link href='#' className='sAncor'>
              <Image className="mw-200" width={10} alt="leeerob" src={Arrow} />
              </Link>
            </div>
          </div>
          <div className='col-sm-12 col-md-4 scond_item'>
            <div className='wrapper-sec bg-white'>
              <h3> Agril Foods LTD</h3>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. </p>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. </p>
            </div>
          </div>
          <div className='col-sm-12 col-md-4 third_item'>
            <div className='wrapper-sec bg-dark'>
              <h3 className='t-antiquewhite'> Our people</h3>
              <p className='t-antiquewhite'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  )
}
