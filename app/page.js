import React from "react";
import Navbar from '../components/Navbar';
import HomeBanner from "../components/HomeBanner";
import SisterConcern from "../components/sisterConcern";
import Carousel from "../components/carousel";
import Fact from '../components/Factfiger';


export default function Home() {
    return (
        <>
         <Navbar />
            <HomeBanner />
            <SisterConcern />
            <Fact/>
            <div className="sectionPadding">
            <Carousel/>
            </div>
          

        </>
    )
}
