function Benefits() {

  const benefits = [

    {
      icon: "🏠",
      title: "Mess Residensial",
      description:
        "Peserta tinggal bersama selama bootcamp untuk menciptakan lingkungan belajar disiplin dan fokus.",
    },

    {
      icon: "🍽️",
      title: "Makan 3x Sehari",
      description:
        "Fasilitas konsumsi harian untuk mendukung kenyamanan dan produktivitas peserta.",
    },

    {
      icon: "🗣️",
      title: "English Environment",
      description:
        "Peserta dibiasakan menggunakan Bahasa Inggris dalam komunikasi engineering.",
    },

    {
      icon: "🧺",
      title: "Laundry & Kebersihan",
      description:
        "Fasilitas laundry dan lingkungan mess terjaga untuk mendukung kenyamanan peserta.",
    },

    {
      icon: "📊",
      title: "Project Simulation",
      description:
        "Belajar melalui simulasi proyek nyata agar siap menghadapi dunia kerja konstruksi.",
    },

    {
      icon: "👨‍🏫",
      title: "Monitoring Intensif",
      description:
        "Peserta mendapatkan pengawasan dan evaluasi rutin selama bootcamp berlangsung.",
    },

  ];

  return (

    <section
      id="benefits"
      className="py-18 md:py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">

          <p className="text-blue-900 font-bold tracking-[0.2em] text-sm mb-4">

            FASILITAS & KEUNGGULAN

          </p>

          <h2 className="text-4xl md:text-5xl leading-tight font-black text-gray-900">

            Lingkungan Belajar
            <span className="text-blue-900"> Intensif & Profesional</span>

          </h2>

          <p className="mt-6 text-[16px] md:text-[19px] text-gray-600 leading-relaxed">

            Nomadian Engineering menghadirkan pengalaman
            bootcamp residensial yang dirancang untuk
            membentuk disiplin, kompetensi, dan mental kerja profesional.

          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {benefits.map((benefit, index) => (

            <div
              key={index}
              className="group relative overflow-hidden bg-white border border-blue-100 rounded-[30px] p-7 md:p-8 shadow-sm hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300"
            >

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-200/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 text-5xl mb-5 group-hover:scale-110 group-hover:-rotate-6 transition duration-300">

                {benefit.icon}

              </div>

              {/* Title */}
              <h3 className="relative z-10 text-[24px] md:text-[28px] font-black text-gray-900 group-hover:text-blue-900 leading-tight mb-4">

                {benefit.title}

              </h3>

              {/* Description */}
              <p className="relative z-10 text-[15px] md:text-[17px] text-gray-600 group-hover:text-gray-700 leading-relaxed">

                {benefit.description}

              </p>

            </div>

          ))}

        </div>

        {/* ================= HIGHLIGHT ================= */}
        <div className="mt-16 md:mt-20">

          <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-[36px] md:rounded-[42px] p-8 md:p-14 shadow-2xl hover:-translate-y-2 hover:shadow-cyan-300/40 transition-all duration-300">

            {/* Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

              {/* LEFT */}
              <div>

                <p className="text-cyan-100 font-bold tracking-[0.2em] text-sm mb-4">

                  FULL INTENSIVE BOOTCAMP

                </p>

                <h3 className="text-[32px] md:text-[43px] leading-[1.1] font-black text-white">

                  Fokus Belajar,
                  Fokus Karir,
                  Fokus Masa Depan

                </h3>

              </div>

              {/* RIGHT */}
              <div className="space-y-5">

                {[
                  "Lingkungan belajar disiplin & produktif",
                  "Simulasi dunia kerja engineering modern",
                  "Monitoring perkembangan peserta setiap minggu",
                  "Penguatan soft skill & komunikasi profesional",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4 text-[15px] md:text-[18px] text-white/90"
                  >

                    <span className="text-cyan-200 text-xl">

                      ✔

                    </span>

                    <p>{item}</p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Benefits;