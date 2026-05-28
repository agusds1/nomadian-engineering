import { motion } from "framer-motion";

function Programs() {

  const programs = [

    {
      icon: "📐",
      title: "AutoCAD",
      description:
        "Drafting 2D/3D, gambar teknik, shop drawing, plotting siap cetak untuk kebutuhan industri konstruksi modern.",
    },

    {
      icon: "🏗️",
      title: "Manajemen Konstruksi",
      description:
        "RAB, scheduling, pengendalian proyek, laporan progres, K3, dan pengelolaan proyek konstruksi.",
    },

    {
      icon: "⚙️",
      title: "Engineering",
      description:
        "Struktur bangunan, MEP, as-built drawing, dan implementasi engineering lapangan berbasis proyek nyata.",
    },

    {
      icon: "🗣️",
      title: "English for Construction",
      description:
        "Speaking, listening, technical writing, dan client communication khusus dunia engineering & konstruksi.",
    },

    {
      icon: "💻",
      title: "Microsoft Office",
      description:
        "Excel & Word untuk kebutuhan proyek: RAB, dashboard, laporan teknik, dan dokumen profesional.",
    },

    {
      icon: "🚀",
      title: "Magang & Penempatan",
      description:
        "Peserta terbaik diprioritaskan untuk magang industri dan penempatan kerja ke perusahaan rekanan.",
    },

  ];

  return (

    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="programs"
      className="py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">

          <p className="text-blue-900 font-bold tracking-[0.25em] mb-4 text-sm">

            PROGRAM UNGGULAN

          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 group-hover:text-blue-900 leading-tight">

            Program Berbasis
            <span className="text-blue-900"> Kompetensi Industri</span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 group-hover:text-gray-700 max-w-3xl mx-auto leading-relaxed">

            Seluruh program dirancang untuk memenuhi kebutuhan nyata
            industri konstruksi dan engineering modern dengan pendekatan
            intensif, praktis, dan siap kerja.

          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((program, index) => (

            <div
              key={index}
              className={`relative rounded-[28px] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group overflow-hidden
              
             "bg-white border border-blue-100 shadow-sm shadow-gray-200/50 hover:bg-blue-50 hover:border-blue-200 hover:shadow-blue-200/40"
              
              `}
            >

              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:-rotate-3 transition duration-300">

                {program.icon}

              </div>

              {/* Title */}
              <h3
                className={`text-2xl font-black mb-4 leading-tight

                  ${
                    program.featured
                      ? "text-white"
                      : "text-gray-text-gray-900 group-hover:text-blue-900"
                  }
                `}
              >

                {program.title}

              </h3>

              {/* Description */}
              <p
                className={`leading-relaxed text-base

                  ${
                    program.featured
                      ? "text-blue-100"
                      : "text-gray-600 group-hover:text-gray-700"
                  }
                `}
              >

                {program.description}

              </p>

              {/* Glow Effect */}
              {program.featured && (

                <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl"></div>

              )}

            </div>

          ))}

        </div>

      </div>

    </motion.section>

  );
}

export default Programs;