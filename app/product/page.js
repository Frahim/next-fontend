import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import products from "../products";

import Beans from '../../public/beans.jpg';
import Bitrrot from '../../public/1200x900_beetroot.jpg';
import Bricolli from '../../public/1200x900_broccoli.jpg';
import Cabbez from '../../public/1200x900_green-cabbage.jpg'



export default function page() {

    return (
        <div className='sectionPadding bgFeather'>
        <div className='container'>
            <div className='row'>
                <div className='title-wrwpper col-12 text-center mb-5 pb-5'>
                    <h2 className='mb-3 fs-40'> Seed assortment</h2>
                    <p className='w-60'>We supply seeds in sustainable packaging; this allows you to store some varieties for up to 10 years.
                        You can literally put your own stamp on the outside of this with a choice of 10 different packaging.
                        You also have control over the information on it and the format.</p>
                </div>



                {products.map((product) => (
                    <div key={product.id} className='col-12 col-lg-4 col-xl-3 mb-3'>
                        <Link href={`/product/${product.id}`}>
                            <div className="card box_shadow1">
                                <div className="">
                                    <Image src={product.img} width={200} height={200} />
                                    <div className="card-body text-center">
                                        <h3 className="textDark mt-2"> {product.name}</h3>
                                    </div>
                                </div>
                            </div>

                        </Link>
                    </div>
                ))}
            </div>


        </div>
        </div>

    )
}

