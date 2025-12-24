import GetQuoteForm from '@/components/GetQuoteForm'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us to discuss your project or request a quote.',
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
            Contact Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let’s <span className='text-[var(--primary-color)]'>Build</span> Something Great
          </h1>

          <p className="text-gray-600 text-lg">
            Have an idea or a project in mind? Fill out the form below and we’ll
            get back to you as soon as possible.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Info Section */}
          <div className="space-y-8">
            
            {/* Info Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition hover:shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Why Contact Us?
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>✔ Clear project estimation & timelines</li>
                <li>✔ Modern, scalable solutions</li>
                <li>✔ Transparent communication</li>
                <li>✔ Long-term technical support</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition hover:shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  <strong>Email:</strong> Admin@infinitybuild.fr
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Working Hours:</strong> Mon – Sat, 9am – 6pm
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
