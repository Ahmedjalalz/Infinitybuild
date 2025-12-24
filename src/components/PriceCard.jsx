// import Link from 'next/link';
// import React from 'react'
// import { GoCheck } from "react-icons/go";

// function PriceCard({title, description, price, benefits}) {
// return (
//     <div className='w-[300px] h-auto m-6 flex flex-col gap-3 items-center p-6 border-2 border-gray-400 rounded-2xl'>
//         <h1 className='text-xl w-full text-center font-semibold' >{title}</h1>
//         <h2 className='text-sm w-full text-center text-gray-500'>{description}</h2>
//         <p className='text-3xl font-bold'>{price}</p>
//         <ul>
//         {benefits?.map((b,index) => (
//             <li key={index} className='flex gap-3'>{b}</li>
            
//         ))}
//         </ul>
//         <Link href={'./getquote'}>
//         <button className='bg-[var(--primary-color)] text-background rounded-lg px-5 py-2'>
//         Get Quote
//         </button>
//         </Link>
//     </div>
// )
// }
// export default PriceCard;




// import React from 'react';
// import { FiCheck } from 'react-icons/fi';

// const PriceCard = ({
//   title = "Starter",
//   subtitle = "Perfect for small businesses",
//   price = "1,499",
//   currency = "USD",
//   features = [
//     "Up to 5 pages",
//     "Responsive design",
//     "Basic SEO setup",
//     "Contact form",
//     "1 month support"
//   ],
//   buttonText = "Get Quote"
// }) => {
//   return (
//     <div className="bg-white rounded-3xl shadow-lg p-8 max-w-sm mx-auto border-2 border-gray-300 hover:shadow-xl transition-shadow duration-300">
//       {/* Title & Subtitle */}
//       <div className="text-center mb-8">
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
//         <p className="text-gray-600">{subtitle}</p>
//       </div>

//       {/* Price */}
//       <div className="text-center mb-10">
//         <span className="text-5xl font-extrabold text-gray-900">
//           ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
//         </span>
//         <span className="text-xl text-gray-600 ml-2">{currency}</span>
//       </div>

//       {/* Features List */}
//       <ul className="space-y-4 mb-10">
//         {features.map((feature, index) => (
//           <li key={index} className="flex items-center gap-3">
//             <div className="w-6 h-6 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center flex-shrink-0">
//               <FiCheck className="w-4 h-4 text-[var(--primary-color)]" />
//             </div>
//             <span className="text-gray-700">{feature}</span>
//           </li>
//         ))}
//       </ul>

//       {/* Button */}
//       <button className="w-full bg-white hover:bg-[var(--primary-color)]/5 text-[var(--primary-color)] font-semibold py-3 px-6 rounded-xl border-2 border-[var(--primary-color)] transition-all duration-200 hover:shadow-md">
//         {buttonText}
//       </button>
//     </div>
//   );
// };

// export default PriceCard;

'use client'
import React from 'react'

export default function PriceCard({
  title,
  subtitle,
  price,
  features,
  isPopular = false,
  buttonStyle = 'outline',
}) {
  return (
    <div
      className={`rounded-2xl border hover:border-[var(--primary-color)]/60 p-8 w-full max-w-sm text-center transition-all
      ${isPopular ? 'border-[var(--primary-color)] shadow-xl scale-105' : 'border-gray-300'}
      `}
    >
      {isPopular && (
        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-white bg-[var(--primary-color)] rounded-full">
          Most Popular
        </span>
      )}

      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500 mt-2">{subtitle}</p>

      <h3 className="text-4xl font-extrabold mt-6">
        {price} {price !== 'Custom' && <span className="text-base">USD</span>}
      </h3>

      <ul className="mt-6 space-y-3 text-left">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-[var(--primary-color)]">✔</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full py-3 rounded-lg font-semibold transition
        ${
          buttonStyle === 'filled'
            ? 'bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color)]/80'
            : 'border border-gray-300 hover:bg-gray-100'
        }
        `}
      >
        Get Quote
      </button>
    </div>
  )
}
