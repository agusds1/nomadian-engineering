function Flow() {
  const careers = [
    "AutoCAD Drafter",
    "Quantity Surveyor",
    "Document Controller",
    "Engineering Staff",
    "Construction Supervisor",
    "Site Engineer",
    "Project Control",
    "Estimator",
  ];

  return (
    <section
      id="flow"
      className="relative py-20 md:pt-20 md:pb-1 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-10 top-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute right-10 bottom-20 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-blue-900 font-bold tracking-[0.25em] mb-4 text-sm">
            CAREER JOURNEY
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Dari Langkah Pertama
            <span className="text-blue-900"> Menuju Karir Impian</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Alur pembelajaran terstruktur yang membawa peserta
            dari proses pendaftaran hingga siap bekerja di industri
            Architecture, Construction, dan Engineering.
          </p>

        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block relative h-[700px]">

          {/* River */}
          <svg
            viewBox="0 0 1200 700"
            className="absolute inset-0 w-full h-full"
          >
            <path
              d="
              M100 120
              C250 20 250 320 420 280
              S650 80 760 260
              S960 480 1100 280
              "
              fill="none"
              stroke="#60A5FA"
              strokeWidth="18"
              strokeLinecap="round"
              strokeDasharray="20 20"
              className="river-path"
            />

            <path
              d="
              M100 120
              C250 20 250 320 420 280
              S650 80 760 260
              S960 480 1100 280
              "
              fill="none"
              stroke="#BFDBFE"
              strokeWidth="40"
              strokeLinecap="round"
              opacity="0.35"
            />
          </svg>

          {/* Pendaftaran */}
          <div className="absolute left-[5%] top-[20%]">

            <div className="w-5 h-5 bg-blue-600 rounded-full shadow-lg mb-4"></div>

            <h3 className="text-xl font-black text-gray-900">
              Pendaftaran
            </h3>

            <p className="mt-2 text-gray-600 max-w-[200px]">
              Konsultasi program dan proses pendaftaran peserta.
            </p>

          </div>

          {/* Pelatihan */}
          <div className="absolute left-[32%] top-[45%]">

            <div className="w-5 h-5 bg-blue-600 rounded-full shadow-lg mb-4"></div>

            <h3 className="text-xl font-black text-gray-900">
              Pelatihan
            </h3>

            <p className="mt-2 text-gray-600 max-w-[220px]">
              Bootcamp intensif berbasis kompetensi industri.
            </p>

          </div>

          {/* Magang */}
          <div className="absolute left-[55%] top-[3%]">

            <h3 className="text-xl font-black text-gray-900">
              Magang
            </h3>

            <p className="mt-2 text-gray-600 max-w-[220px]">
              Pengalaman langsung melalui praktik industri.
            </p>

            <div className="w-5 h-5 bg-blue-600 rounded-full shadow-lg mt-4"></div>

          </div>

          {/* Penempatan */}
          <div className="absolute right-[5%] top-[64%]">

            <div className="w-5 h-5 bg-blue-600 rounded-full shadow-lg mb-4"></div>

            <h3 className="text-xl font-black text-gray-900">
              Penempatan Kerja
            </h3>

            <p className="mt-2 text-gray-600 max-w-[240px]">
              Lulusan terbaik direkomendasikan ke perusahaan rekanan.
            </p>

          </div>

          {/* Career Pills */}
          <div className="absolute left-[80%] bottom-[65%] w-[280px]">

              <div className="flex flex-wrap justify-center gap-4">

              {careers.map((career, index) => (

                <div
                  key={index}
                  className="career-pill px-4 py-2 bg-white border border-blue-100 rounded-full text-xs font-medium text-gray-800 shadow-md hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all duration-300"
                  style={{
                    animationDuration: `${8 + (index % 5)}s`,
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  {career}
                </div>

              ))}

            </div>
            <h3 className="text-2xl font-black text-blue-900 mt-3 text-center">
              Peluang Karir
            </h3>

          </div>

        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">

          <div className="space-y-8">

            {[
              "Pendaftaran",
              "Pelatihan",
              "Magang",
              "Penempatan Kerja",
            ].map((step, index) => (

              <div
                key={index}
                className="text-center"
              >

                <div className="w-4 h-4 rounded-full bg-blue-900 mx-auto"></div>

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  {step}
                </h3>

                {index !== 3 && (
                  <div className="h-12 w-[2px] bg-blue-200 mx-auto mt-4"></div>
                )}

              </div>

            ))}

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">

            {careers.map((career, index) => (

              <div
                key={index}
                className="px-4 py-2 bg-white border border-blue-100 rounded-full text-sm font-semibold"
              >
                {career}
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Flow;