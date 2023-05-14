import React from 'react'
import HomeBanner from '@/components/HomeBanner';

import Products from '../product/page'

function AgrilFoods() {
  return (
    <>
     <HomeBanner/>
      <div className='sectionPadding bg-whitesmoke'>     
      <Products/>
    </div>
    </>
  )
}

export default AgrilFoods