'use client'
import React from 'react'
import {useParams} from "next/navigation"
import packageslist from '@/data';
import PriceCard from '@/components/PriceCard';
function page() {
    const {id} = useParams(); 
    const pid = Number(id)
    const PPe = packageslist.find(p => p.id == pid)


    if(!PPe){
        return <p>Not found</p>
    }

  return (
    <div>
      <PriceCard 
      title={PPe.title}
      description={PPe.description}
      price={PPe.price}
      benefits={PPe.benefits}
      />
    </div>
  )
}

export default page
