import GetQuoteForm from '@/components/GetQuoteForm'

export default function GetQuotePage() {
  return (
    <section className="min-h-screen bg-gray-50 my-6 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Obtenez un <span className='text-[var(--primary-color)]'>devis sur mesure</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Présentez-nous votre projet et nous vous recontacterons avec une
          proposition personnalisée, adaptée à vos objectifs et à votre budget.
        </p>
      </div>

      <GetQuoteForm />
    </section>
  )
}
