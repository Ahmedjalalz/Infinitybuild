import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PriceCard from '@/components/PriceCard'
import ServicesSection from '@/components/ServicesSection'
import Subscribe from '@/components/Subscribe'
import React from 'react'

export const metadata = {
  title: 'Agence de développement web | Solutions digitales sur mesure',
  description:
    'Agence de développement web spécialisée dans la création de sites web modernes, applications performantes et solutions digitales sur mesure pour faire grandir votre entreprise.',
}


function page() {
  return (
    <div>

      <Hero/>
      <ServicesSection/>
    </div>
  )
}

export default page
