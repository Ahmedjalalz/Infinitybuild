import Link from "next/link"

export const metadata = {
  title: 'About Us',
  description:
    'Learn more about our web development agency, our process, and how we help businesses grow through modern digital solutions.',
}

export default function AboutPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm border border-[var(--primary-color)]/70 font-medium mb-4"
            style={{
              backgroundColor:
                'color-mix(in srgb, var(--primary-color) 5%, transparent)',
              color: 'var(--primary-color)',
            }}
          >
            About Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We <span className='text-[var(--primary-color)]'>Design & Build</span> Digital Products That Drive Results
          </h1>

          <p className="text-lg text-gray-600">
            We are a professional web development agency focused on creating
            modern, scalable, and high-performing digital solutions for
            businesses worldwide.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          
          {/* Left Content */}
          <div className="space-y-10">
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition hover:shadow-md hover:border-[var(--primary-color)]/70">
              <h3 className="text-2xl text-[var(--primary-color)] font-semibold mb-4">
                Who We Are
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are a team of skilled developers and designers who specialize
                in building high-quality websites and web applications. Our
                focus is not just on visuals, but on delivering solutions that
                are fast, secure, user-friendly, and aligned with your business
                goals.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition hover:shadow-md hover:border-[var(--primary-color)]/70">
              <h3 className="text-2xl text-[var(--primary-color)] font-semibold mb-4">
                What We Do
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>✔ Custom website development</li>
                <li>✔ Web applications & dashboards</li>
                <li>✔ Performance & SEO-focused builds</li>
                <li>✔ Responsive and modern UI/UX</li>
                <li>✔ Long-term support & improvements</li>
              </ul>
            </div>

          </div>

          {/* Right Content */}
          <div className="space-y-10">
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition hover:shadow-md hover:border-[var(--primary-color)]/70">
              <h3 className="text-2xl text-[var(--primary-color)] font-semibold mb-4">
                How We Work
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our process is simple, transparent, and client-focused.
              </p>

              <ol className="space-y-4 text-gray-600 text-sm">
                <li>
                  <strong>1. Requirement Collection:</strong> You submit your
                  project details through our Get Quote form.
                </li>
                <li>
                  <strong>2. Analysis & Proposal:</strong> We review your
                  requirements and send you a detailed proposal including cost,
                  timeline, and features.
                </li>
                <li>
                  <strong>3. Development:</strong> Once approved, we start
                  building your project with regular updates.
                </li>
                <li>
                  <strong>4. Delivery & Support:</strong> We deliver the final
                  product and provide ongoing support if needed.
                </li>
              </ol>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition hover:shadow-md hover:border-[var(--primary-color)]/70">
              <h3 className="text-2xl text-[var(--primary-color)] font-semibold mb-4">
                Why Choose Us
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>✔ Clear communication & transparency</li>
                <li>✔ Modern technologies & best practices</li>
                <li>✔ Business-focused solutions</li>
                <li>✔ On-time delivery</li>
                <li>✔ Long-term partnership mindset</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 ">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8">
            Share your idea with us and get a clear, detailed proposal tailored
            to your needs.
          </p>

          <Link
            href="/get-quote"
            className="inline-block px-8 py-4 rounded-xl text-white font-semibold
                       transition shadow-md hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--primary-color)' }}
          >
            Get a Quote →
          </Link>
        </div>

      </div>
    </section>
  )
}
