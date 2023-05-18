import React from "react";
import Navbar from '../components/Navbar';
import HomeBanner from "../components/HomeBanner";
import SisterConcern from "../components/sisterConcern"
import Carousel from "../components/carousel";
import Factfiger from '../components/FactFiger'


export default function Home() {
    return (
        <>
         <Navbar />
            <HomeBanner />
            <SisterConcern />
            <Factfiger/>
            <div className="sectionPadding">
            <Carousel/>
            </div>
          

        </>
    )
}
