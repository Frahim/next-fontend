import React from 'react';
import Link from "next/link"
import Image from 'next/image';
import AgrilLogo from '../public/agrillogo_03.png'
import kingLogo from '../public/kingfeedLogo.png';
import 'bootstrap/dist/css/bootstrap.css';
import {GrPrevious} from 'react-icons';

export default function () {
    return (
        <div className='sisHwrapper'>
            <div className='agrilBack'>
            <Link className="backhomepage" href="/"><Image className="mw-100" width={100} alt="leeerob" src={AgrilLogo} /></Link>
            <span><GrPrevious/> Back to Agril</span>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand mw-200" href="/"><Image className="mw-200" width={200} alt="leeerob" src={kingLogo} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">

                        <ul className="navbar-nav mr-0  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/agrilFoods">Agril Foods</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
