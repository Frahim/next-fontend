import React from 'react'
import Image from 'next/image';
import whoicon from '../public/whoweare.png';
import Agril from '../public/agrillogo_03.png';
import kingfeed from '../public/kingfeed-logo_03.png'
import Arrow from '../public/arow.svg'
import Link from 'next/link';
import { Istok_Web} from '@next/font/google'
const istok = Istok_Web({ 
    subsets: ['latin'],
    weight:['400','700']
  })


export default function sisterConcern() {
  return (
    <div className='wrapper sectionPadding'>
      <div className='container'>
        <div className='row g-0 align'>
          <div className='col-sm-12 col-md-4 first_item'>
            <div className='wrapper-sec bg-gray'>
              <Image className="mw-200" width={150} alt="leeerob" src={Agril} />
              <h2 className='sisFirstTitle'>Who we are</h2>
              <Link className="nav-link" href="/agrilFoods">
              <Image className="mw-200" width={10} alt="leeerob" src={Arrow} />
              </Link>
            
            </div>
          </div>
          <div className='col-sm-12 col-md-4 scond_item'>
            <div className='wrapper-sec bg-cian'>
              <h3 className={istok.className}> Agril Foods LTD</h3>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. </p>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. </p>
            </div>
          </div>
          <div className='col-sm-12 col-md-4 third_item align-self-center'>
            <div className='wrapper-sec bg-dark'>
              <h3 className='t-antiquewhite'> Our people</h3>
              <p className='t-antiquewhite'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. </p>
            </div>
          </div>
        </div>

        <div className='row g-0 my-5'>          
          <div className='col-sm-12 col-md-4 scond_item'>
            <div className='wrapper-sec bg-cian  '>
              <h3 > King Feed LTD</h3>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. </p>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. </p>
            </div>
          </div>
          <div className='col-sm-12 col-md-4 first_item'>
            <div className='wrapper-sec bg-white '>
              <Image className="mw-200" width={150} alt="leeerob" src={kingfeed} />
              <h2 className='sisFirstTitle t-dark'>Who we are</h2>
              <Link href='#' className='sAncor'>
              <Image className="mw-200" width={10} alt="leeerob" src={Arrow} />
              </Link>
            </div>
          </div>
          <div className='col-sm-12 col-md-4 third_item align-self-center'>
            <div className='wrapper-sec bg-cian'>
              <h3 > Our people</h3>
              <p >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  )
}
