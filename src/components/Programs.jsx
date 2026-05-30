import { motion } from "framer-motion";

function Programs() {

  const programs = [

    {
      icon: "📐",
      title: "AutoCAD",
      description:
        "Drafting 2D/3D, shop drawing, plotting, dan gambar teknik siap industri konstruksi modern.",
    },

    {
      icon: "🏗️",
      title: "Manajemen Konstruksi",
      description:
        "RAB, scheduling, pengendalian proyek, K3, dan pengelolaan proyek konstruksi profesional.",
    },

    {
      icon: "⚙️",
      title: "Engineering",
      description:
        "Struktur bangunan, MEP, as-built drawing, dan implementasi engineering berbasis project nyata.",
    },

    {
      icon: "🗣️",
      title: "English for Construction",
      description:
        "Speaking, technical writing, dan komunikasi profesional dunia engineering & konstruksi.",
    },

    {
      icon: "💻",
      title: "Microsoft Office",
      description:
        "Excel & Word untuk kebutuhan proyek, dashboard, laporan teknik, dan administrasi profesional.",
    },

    {
      icon: "🚀",
      title: "Magang & Penempatan",
      description:
        "Peserta terbaik diprioritaskan untuk magang industri dan penempatan kerja perusahaan rekanan.",
    },

  ];

  return (

    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="programs"
      className="py-14 md:py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">

          <p className="text-blue-900 font-bold tracking-[0.2em] text-sm mb-4">

            PROGRAM UNGGULAN

          </p>

          <h2 className="text-4xl md:text-5xl leading-tight font-black text-gray-900">

            Program Berbasis
            <span className="text-blue-900"> Kompetensi Industri</span>

          </h2>

          <p className="mt-6 text-[16px] md:text-[19px] text-gray-600 leading-relaxed">

            Seluruh program dirancang untuk memenuhi kebutuhan nyata
            industri konstruksi dan engineering modern
            dengan pendekatan intensif dan siap kerja.

          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {programs.map((program, index) => (

            <div
              key={index}
              className="group relative overflow-hidden bg-white border border-blue-100 rounded-[30px] p-7 md:p-8 shadow-sm hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-100/60 transition-all duration-300"
            >

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 text-5xl mb-5 group-hover:scale-110 group-hover:-rotate-6 transition duration-300">

                {program.icon}

              </div>

              {/* Title */}
              <h3 className="relative z-10 text-[24px] md:text-[28px] font-black text-gray-900 group-hover:text-blue-900 leading-tight mb-4">

                {program.title}

              </h3>

              {/* Description */}
              <p className="relative z-10 text-[15px] md:text-[17px] text-gray-600 group-hover:text-gray-700 leading-relaxed">

                {program.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </motion.section>

  );
}

export default Programs;