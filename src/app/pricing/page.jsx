// import PriceCard from '@/components/PriceCard'
// import React from 'react'

// function page() {
//     const benefitslist = ["Up to 5 pages", "Responsive design", "Basic SEO setup", "Contact form", "1 month support"] 
//   return (
//     <div>
//       <PriceCard title="Red Package" description={"Best for Starting"} price={"$1499"} benefits={benefitslist}/>
//     </div>
//   )
// }

// export default page
import PriceCard from '@/components/PriceCard'

export default function PricingPage() {
  return (

    <section className="min-h-screen bg-gray-50 my-6 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* Headings */}
        <h1 className="text-5xl font-bold text-[var(--foreground)] mb-4">
          Simple, Transparent <span className='text-[var(--primary-color)]'>Pricing</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Choose a plan that fits your needs. All plans include our core features
          and dedicated support.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3 justify-items-center">
          <PriceCard
            title="Starter"
            subtitle="Perfect for small businesses"
            price="$1,499"
            features={[
              'Up to 5 pages',
              'Responsive design',
              'Basic SEO setup',
              'Contact form',
              '1 month support',
            ]}
          />

          <PriceCard
            title="Professional"
            subtitle="Most popular choice"
            price="$3,499"
            isPopular
            buttonStyle="filled"
            features={[
              'Up to 15 pages',
              'Custom design',
              'Advanced SEO',
              'CMS integration',
              'Analytics setup',
              '3 months support',
            ]}
          />

          <PriceCard
            title="Enterprise"
            subtitle="For complex projects"
            price="Custom"
            features={[
              'Unlimited pages',
              'Custom functionality',
              'E-commerce features',
              'API integrations',
              'Priority support',
              '12 months support',
            ]}
          />
        </div>

      </div>
    </section>
  )
}
