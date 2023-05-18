import React from "react";
import Navbar from '../components/Navbar';
import HomeBanner from "../components/HomeBanner";
import SisterConcern from "../components/SisterConsern";
import Carousel from "../components/carousel";
import Counting from "../components/counting"


export default function Home() {
    return (
        <>
         <Navbar />
            <HomeBanner />
            <SisterConcern />
            <Counting/>
            <div className="sectionPadding">
            <Carousel/>
            </div>
          

        </>
    )
}
