import React from 'react';
import Carousel from "../../components/carousel";
import Navbar from '../../components/Navbar';

function About() {
  return (
    <>
  <Navbar />
    <div className='aboutWrapper'>
      <div className="header-slider">
        <div className="background-image bg-image">
          <div className='bannertext'>
            <h1>Agril Foods LTD</h1>
          </div>
        </div>

      </div>
      <div className='contentWrapper sectionPadding'>
        <div className='container'>
          <div className='bodycontent'>
            <h2>What is Lorem Ipsum?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          </div>
          <Carousel />
        </div>
      </div>

    </div>
    </>
  )
}

export default About