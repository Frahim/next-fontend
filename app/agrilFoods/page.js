import React from 'react'
import HomeBanner from '@/components/HomeBanner';
import Navbar from '../../components/Navbar';
import Products from '../product/page'

function AgrilFoods() {
  return (
    <>
     <Navbar />
     <HomeBanner/>
      <div className='bg-whitesmoke'>     
      <Products/>
    </div>
    </>
  )
}

export default AgrilFoods