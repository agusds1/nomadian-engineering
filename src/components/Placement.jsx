function Placement() {
  const careers = [
    "AutoCAD Drafter",
    "Site Engineer",
    "Quantity Surveyor",
    "Estimator",
    "Project Control",
    "Construction Supervisor",
    "Engineering Staff",
    "Project Admin",
    "Document Controller",
    "CAD Operator",
    "Field Engineer",
    "Project Coordinator",
  ];

  return (
    <section
      id="placement"
      className="relative py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-20 top-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="absolute right-20 bottom-20 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-900 font-bold tracking-[0.25em] mb-4 text-sm">
            CAREER PATHWAY
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Setelah Lulus,
            <span className="text-blue-900"> Kamu Bisa Menjadi</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Program dirancang untuk membangun kompetensi yang
            dibutuhkan industri konstruksi dan engineering modern.
          </p>
        </div>

        {/* Floating Career Pills */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-5xl mx-auto">
          {careers.map((career, index) => (
            <div
              key={index}
              className="career-pill px-5 py-3 md:px-6 md:py-4 bg-white border border-blue-100 rounded-full text-gray-800 font-semibold shadow-sm hover:bg-blue-900 hover:text-white hover:border-blue-900 hover:scale-105 hover:shadow-xl transition-all duration-300"
              style={{
                animationDuration: `${6 + (index % 5)}s`,
                animationDelay: `${index * 0.4}s`,
              }}
            >
              {career}
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-base md:text-lg">
            Dan berbagai posisi lainnya sesuai kebutuhan industri
            Architecture, Construction, dan Engineering.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Placement;