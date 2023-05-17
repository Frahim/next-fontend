import React from 'react';
import Image from 'next/image';
import bimg from '../public/smart-agriculture.jpg';

export default function staticBanner() {
    return (
        <div>
            <div className="header-slider">
                <div className="slide">
                    <div className="background-image bg-image">
                        <Image alt="headerimg2" className="bg-image-img" loading="lazy" src={bimg} />
                    </div>
                </div>
            </div>
        </div>
    )
}
