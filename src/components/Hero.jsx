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
          Premium Web Development
        </div>
        <div className="absolute h-screen inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25),transparent_70%)]" />

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
          We Build{" "}
          <span className="text-white">
            Digital Experiences
          </span>{" "}
          That Convert
        </h1>

        {/* Description */}
        <p className="mt-6 text-white/80 text-lg max-w-3xl mx-auto">
          From stunning websites to powerful web applications, we craft
          solutions that elevate your brand and drive real business results.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 z-10 relative">
          <Link href="/get-quote" className="bg-white cursor-pointer hover:bg-white/90 text-[var(--primary-color)] px-7 py-3 rounded-xl font-semibold shadow-lg inline-block">
            Start Your Project →
          </Link>

          <Link href="/pricing" className="bg-transparent cursor-pointer hover:bg-white/10 text-white px-7 py-3 rounded-xl font-medium border border-white/50 shadow-sm backdrop-blur-sm transition inline-block">
            View Pricing
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12">
          <Stat value="50+" label="Projects Delivered" className="text-white" />
          <Stat value="98%" label="Client Satisfaction" className="text-white" />
          <Stat value="5+" label="Years Experience" className="text-white" />
        </div>

      </div>
    </section>
    // <section className="relative pt-32 pb-24 overflow-hidden">

    //   {/* Background glow */}
    //   {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(1,75,173,0.2),transparent_60%)]" /> */}

    //   {/* Grid background */}
    //   <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />

    //   <div className="max-w-5xl mx-auto px-6 text-center">

    //     {/* Badge */}
    //     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background shadow-sm border border-gray-400 text-sm text-gray-600 mb-6">
    //       <span className="text-[var(--primary-color)]">✦</span>
    //       Premium Web Development
    //     </div>

    //     {/* Heading */}
    //     <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight text-gray-900">
    //       We Build{" "}
    //       <span className="text-[var(--primary-color)]">
    //         Digital Experiences
    //       </span>{" "}
    //       That Convert
    //     </h1>

    //     {/* Description */}
    //     <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
    //       From stunning websites to powerful web applications, we craft
    //       solutions that elevate your brand and drive real business results.
    //     </p>

    //     {/* Buttons */}
    //     <div className="mt-10 flex justify-center gap-4">
    //       <button className="bg-[var(--primary-color)] hover:opacity-90 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition">
    //         Start Your Project →
    //       </button>

    //       <button className="bg-background hover:bg-gray-100 px-7 py-3 rounded-xl font-medium border border-gray-400 shadow-sm transition">
    //         View Pricing
    //       </button>
    //     </div>

    //     {/* Stats */}
    //     <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12">
    //       <Stat value="50+" label="Projects Delivered" />
    //       <Stat value="98%" label="Client Satisfaction" />
    //       <Stat value="5+" label="Years Experience" />
    //     </div>

    //   </div>
    // </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-extrabold text-background">
        {value}
      </h3>
      <p className="mt-2 text-white">{label}</p>
    </div>
  );
}
