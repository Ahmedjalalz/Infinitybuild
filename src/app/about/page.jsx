import Link from "next/link"

export const metadata = {
  title: 'À propos de nous',
  description:
    'Découvrez notre agence de développement web, notre méthodologie et la manière dont nous aidons les entreprises à se développer grâce à des solutions digitales modernes.',
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
            À propos de nous
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {/* Nous concevons et développons des produits digitaux qui génèrent des résultats */}
            Nous <span className='text-[var(--primary-color)]'>créons des sites rapides, sécurisés,</span> pensés pour vendre et obtenir des résultats
          </h1>

          <p className="text-lg text-gray-600">
            Nous sommes une agence professionnelle de développement web,
            spécialisée dans la création de Nous concevons des solutions digitales en utilisant des technologies modernes comme Next.js et Tailwind CSS, pensées pour être rapides, et faciles à maintenir.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left Content */}
          <div className="space-y-10">

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition hover:shadow-md hover:border-[var(--primary-color)]/70">
              <h3 className="text-2xl text-[var(--primary-color)] font-semibold mb-4">
                Qui sommes-nous
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Infinity Build est née de l’association de deux amis passionnés par l’entrepreneuriat et le digital.
                <br/><br/>
                Nous avons créé cette agence avec une idée simple : concevoir des solutions digitales utiles, performantes et orientées résultats, capables d’aider concrètement les entreprises à se développer.
                <br/><br/>
                En tant que jeunes entrepreneurs, nous avons choisi de nous lancer pleinement dans cette aventure en mettant notre énergie, notre rigueur et notre sens du détail au service de commerçants et d’entrepreneurs souhaitant renforcer leur présence en ligne.
                <br/><br/>

                Chaque projet est pour nous un véritable partenariat : nous ne livrons pas seulement un site ou une application, mais une solution pensée pour répondre à des objectifs précis et générer de la valeur sur le long terme.

              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition hover:shadow-md hover:border-[var(--primary-color)]/70">
              <h3 className="text-2xl text-[var(--primary-color)] font-semibold mb-4">
                Ce que nous faisons
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>✔ Développement de sites web sur mesure</li>
                <li>✔ Applications web & tableaux de bord</li>
                <li>✔ Conceptions axées sur la performance et le SEO</li>
                <li>✔ Interfaces UI/UX modernes et responsives</li>
                <li>✔ Support et améliorations à long terme</li>
              </ul>
            </div>

          </div>

          {/* Right Content */}
          <div className="space-y-10">

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition hover:shadow-md hover:border-[var(--primary-color)]/70">
              <h3 className="text-2xl text-[var(--primary-color)] font-semibold mb-4">
                Notre méthode de travail
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Notre processus est simple, transparent et centré sur le client.
              </p>

              <ol className="space-y-4 text-gray-600 text-sm">
                <li>
                  <strong>1. Collecte des besoins :</strong> Vous soumettez les
                  détails de votre projet via notre formulaire de devis.
                </li>
                <li>
                  <strong>2. Analyse et proposition :</strong> Nous étudions vos
                  besoins et vous envoyons une proposition détaillée incluant
                  le budget, les délais et les fonctionnalités.
                </li>
                <li>
                  <strong>3. Développement :</strong> Une fois validé, nous
                  lançons le développement avec des mises à jour régulières.
                </li>
                <li>
                  <strong>4. Livraison et accompagnement :</strong> Nous livrons
                  le produit final et assurons un support continu si nécessaire.
                </li>
              </ol>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition hover:shadow-md hover:border-[var(--primary-color)]/70">
              <h3 className="text-2xl text-[var(--primary-color)] font-semibold mb-4">
                Pourquoi nous choisir
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>Communication claire et transparente</li>
                <li>Technologies modernes et bonnes pratiques</li>
                <li>Solutions orientées business</li>
                <li>Respect des délais</li>
                <li>Vision de partenariat à long terme</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 ">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-gray-600 mb-8">
            Partagez votre idée avec nous et recevez une proposition claire et
            détaillée, adaptée à vos besoins.
          </p>

          <Link
            href="/get-quote"
            className="inline-block px-8 py-4 rounded-xl text-white font-semibold
                       transition shadow-md hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--primary-color)' }}
          >
            Demander un devis →
          </Link>
        </div>

      </div>
    </section>
  )
}
