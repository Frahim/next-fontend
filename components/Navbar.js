import Link from "next/link"
import Image from 'next/image';
import Logo from '../public/logo.webp';
import 'bootstrap/dist/css/bootstrap.css';
export default function Navbar() {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand mw-200" href="/"><Image className="mw-200" width={200} alt="leeerob" src={Logo} /></Link>
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
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Our Brands
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" href="/kingfeed">Kink Feeds</Link></li>
                                    <li><Link className="dropdown-item" href="/georgicabd">Georgica</Link></li>                                    
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )
}