import React from 'react'
import HomeBanner from '@/components/HomeBanner';
import Products from '../product/page'



import Link from "next/link"
import Image from 'next/image';
import AgrilLogo from '../../public/agrillogo_03.png'
import gorLogo from '../../public/Georgiclogo.png';
import { GrPrevious } from 'react-icons/gr';

function gorgic() {
  return (
    <>
    <div className='sisHwrapper'>
            <div className='agrilBack'>
            <Link className="backhomepage" href="/"><Image className="homelogo" width={100} alt="leeerob" src={AgrilLogo} /> </Link>
            <Link className="backhomepage" href="/"><span className='homebtn'><GrPrevious/> Back to Agril</span></Link>
           
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand mw-200" href="/"><Image className="sisterLogo" width={100} alt="leeerob" src={gorLogo} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">

                        <ul className="navbar-nav mr-0  mb-2 mb-lg-0">                           
                            <li className="nav-item">
                                <Link className="nav-link" href="/georgicabd#about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/georgicabd#productsec">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     <HomeBanner/>
     <div id='about' className='aboutCompany sectionPadding '>
                <div className='container'>
                    <h2>Welcome to Georgica BD Limited </h2>
                    <h3>What is Lorem Ipsum?</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
      <div id='productsec' className='bg-whitesmoke'>     
      <Products/>
    </div>
    </>
  )
}

export default gorgic