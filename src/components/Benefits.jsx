function Benefits() {

  const benefits = [

    {
      icon: "🏠",
      title: "Mess Residensial",
      description:
        "Peserta tinggal bersama selama bootcamp untuk menciptakan lingkungan belajar yang disiplin dan fokus.",
    },

    {
      icon: "🍽️",
      title: "Makan 3x Sehari",
      description:
        "Fasilitas konsumsi harian untuk mendukung kenyamanan dan produktivitas peserta selama program.",
    },

    {
      icon: "🗣️",
      title: "English Environment",
      description:
        "Peserta dibiasakan menggunakan Bahasa Inggris dalam komunikasi dan presentasi engineering.",
    },

    {
      icon: "🧺",
      title: "Laundry & Kebersihan",
      description:
        "Fasilitas laundry dan lingkungan mess yang terjaga untuk mendukung kenyamanan peserta.",
    },

    {
      icon: "📊",
      title: "Project Simulation",
      description:
        "Belajar melalui simulasi proyek nyata agar peserta siap menghadapi dunia kerja konstruksi.",
    },

    {
      icon: "👨‍🏫",
      title: "Monitoring Intensif",
      description:
        "Peserta mendapatkan pengawasan dan evaluasi rutin selama proses bootcamp berlangsung.",
    },

  ];

  return (

    <section
      id="benefits"
      className="py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">

          <p className="text-blue-900 font-bold tracking-[0.25em] mb-4 text-sm">

            FASILITAS & KEUNGGULAN

          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">

            Lingkungan Belajar
            <span className="text-blue-900"> Intensif & Profesional</span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Nomadian Engineering menghadirkan pengalaman
            bootcamp residensial yang dirancang untuk
            membentuk disiplin, kompetensi, dan mental kerja profesional.

          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {benefits.map((benefit, index) => (

            <div
              key={index}
              className="bg-white border border-blue-100 rounded-[28px] p-8 shadow-sm shadow-gray-200/50 hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-200/40 transition-all duration-300 group"
            >

              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:-rotate-3 transition duration-300">

                {benefit.icon}

              </div>

              {/* Title */}
              <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-900 transition duration-300">

                {benefit.title}

              </h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-gray-700 transition duration-300 leading-relaxed text-base">

                {benefit.description}

              </p>

            </div>

          ))}

        </div>

        {/* ================= BOTTOM HIGHLIGHT ================= */}
        <div className="mt-20">

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[32px] p-8 md:p-10 shadow-xl hover:-translate-y-2 hover:shadow-cyan-300/40 transition-all duration-300">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* LEFT */}
              <div>

                <p className="font-bold tracking-[0.2em] text-cyan-100 mb-4 text-sm">

                  FULL INTENSIVE BOOTCAMP

                </p>

                <h3 className="text-3xl md:text-4xl font-black leading-tight text-white">

                  Fokus Belajar,
                  Fokus Karir,
                  Fokus Masa Depan

                </h3>

              </div>

              {/* RIGHT */}
              <div className="space-y-4 text-base text-white/90">

                <div className="flex items-start gap-3">
                  <span className="text-xl">✔</span>
                  <p>Lingkungan belajar disiplin & produktif</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">✔</span>
                  <p>Simulasi dunia kerja engineering modern</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">✔</span>
                  <p>Monitoring perkembangan peserta setiap minggu</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">✔</span>
                  <p>Penguatan soft skill & komunikasi profesional</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Benefits;