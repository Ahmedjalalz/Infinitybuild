import GetQuoteForm from '@/components/GetQuoteForm'

export default function GetQuotePage() {
  return (
    <section className="min-h-screen bg-gray-50 my-6 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Get a <span className='text-[var(--primary-color)]'>Custom Quote</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tell us about your project and we’ll get back to you with a tailored
          proposal that fits your goals and budget.
        </p>
      </div>

      <GetQuoteForm />
    </section>
  )
}
