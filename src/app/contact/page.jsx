import GetQuoteForm from '@/components/GetQuoteForm'

export const metadata = {
  title: 'Contactez-nous',
  description: 'Contactez-nous pour discuter de votre projet ou demander un devis.',
}

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--primary-color) 10%, transparent)',
              color: 'var(--primary-color)',
            }}
          >
            Contactez-nous
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Construisons <span className='text-[var(--primary-color)]'>ensemble</span> quelque chose d’exceptionnel
          </h1>

          <p className="text-gray-600 text-lg">
            Vous avez une idée ou un projet en tête ? Remplissez le formulaire
            ci-dessous et nous vous répondrons dans les plus brefs délais.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Info Section */}
          <div className="space-y-8">
            
            {/* Info Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition hover:shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Pourquoi nous contacter ?
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>✔ Estimation claire du projet et des délais</li>
                <li>✔ Solutions modernes et évolutives</li>
                <li>✔ Communication transparente</li>
                <li>✔ Support technique à long terme</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition hover:shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Informations de contact
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  <strong>Email :</strong> Admin@infinitybuild.fr
                </p>
                <p>
                  <strong>Téléphone :</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Horaires :</strong> Lun – Sam, 9h – 18h
                </p>
              </div>
            </div>

          </div>

          {/* Right Form */}
          <GetQuoteForm />

        </div>
      </div>
    </section>
  )
}
