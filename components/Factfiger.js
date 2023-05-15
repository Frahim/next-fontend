import React from 'react';
import Image from 'next/image';
import beans from '../public/beans.jpg'
 

export default function factfiger() {
  return (
    <div className='factAndFigurs'>
        <div className='container'>
            <div className='row'>
                <div className='crops col-sm-6 col-md-2'>
                    <div className=''>
                        <Image src={beans}  width={80} height={80} />
                        <span className='number'>40</span>
                        <span className='itemname'>Crops</span> 
                    </div>
                </div>
                <div className='crops col-sm-6 col-md-2'>
                    <div className='innerwrap'>
                        <Image wi src={beans}  width={80} height={80}/>
                        <span className='number'>40</span>
                        <span className='itemname'>Crops</span> 
                    </div>
                </div>
                <div className='crops col-sm-6 col-md-2'>
                    <div className=''>
                        <Image src={beans} width={80} height={80}/>
                        <span className='number'>40</span>
                        <span className='itemname'>Crops</span> 
                    </div>
                </div>
                <div className='crops col-sm-6 col-md-2'>
                    <div className=''>
                        <Image src={beans} width={80} height={80}/> 
                        <span className='number'>40</span>
                        <span className='itemname'>Crops</span> 
                    </div>
                </div>
                <div className='crops col-sm-6 col-md-2'>
                    <div className=''>
                        <Image src={beans} width={80} height={80}/>
                        <span className='number'>40</span>
                        <span className='itemname'>Crops</span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
