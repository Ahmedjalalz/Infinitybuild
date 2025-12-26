import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative [clip-path:polygon(0_0,_100%_0,_100%_90%,_0_100%)] pt-32 pb-24 overflow-hidden bg-[var(--primary-color)]">

      {/* Grid background - subtle white lines on top of the glow */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-5" />

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white mb-6">
          <span className="text-white">✦</span>
          Développement web premium
        </div>
        <div className="absolute h-screen inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25),transparent_70%)]" />

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
          Nous créons{" "}
          <span className="text-white">
            des expériences digitales
          </span>{" "}
          qui se démarquent
        </h1>

        {/* Description */}
        <p className="mt-6 text-white/80 text-lg max-w-3xl mx-auto">
          Des sites web élégants aux applications web performantes, nous concevons
          des solutions qui valorisent votre marque et génèrent des résultats concrets.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 z-10 relative">
          <Link href="/get-quote" className="bg-white cursor-pointer hover:bg-white/90 text-[var(--primary-color)] px-7 py-3 rounded-xl font-semibold shadow-lg inline-block">
            Démarrer →
          </Link>

          <Link href="/about" className="bg-transparent cursor-pointer hover:bg-white/10 text-white px-7 py-3 rounded-xl font-medium border border-white/50 shadow-sm backdrop-blur-sm transition inline-block">
            À propos
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12">
          <Stat value="Sur mesure" label="Solutions" className="text-white" />
          <Stat value="Orientation client" label="Approche" className="text-white" />
          <Stat value="Évolution et sécurité" label="Code" className="text-white" />
        </div>

      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-extrabold text-background">
        {value}
      </h3>
      <p className="mt-2 text-white">{label}</p>
    </div>
  );
}
