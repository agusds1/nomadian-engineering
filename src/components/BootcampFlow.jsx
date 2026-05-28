import { motion } from "framer-motion";

function BootcampFlow() {

  const steps = [

    {
      number: "01",
      title: "Pendaftaran",
      description:
        "Peserta melakukan pendaftaran bootcamp dan konsultasi program sesuai minat serta tujuan karir.",
      icon: "📝",
    },

    {
      number: "02",
      title: "Seleksi & Interview",
      description:
        "Peserta mengikuti proses seleksi ringan untuk mengetahui kesiapan belajar dan penempatan kelas.",
      icon: "🎯",
    },

    {
      number: "03",
      title: "Bootcamp Intensif",
      description:
        "Pembelajaran dilakukan secara intensif berbasis project dan simulasi dunia kerja engineering.",
      icon: "💻",
    },

    {
      number: "04",
      title: "Project Simulation",
      description:
        "Peserta mengerjakan simulasi project nyata untuk membangun skill teknis dan teamwork.",
      icon: "🏗️",
    },

    {
      number: "05",
      title: "Magang Industri",
      description:
        "Peserta terbaik mendapatkan kesempatan magang ke perusahaan rekanan industri.",
      icon: "🚀",
    },

    {
      number: "06",
      title: "Penempatan Kerja",
      description:
        "Peserta dipersiapkan untuk memasuki dunia kerja dengan pendampingan dan career support.",
      icon: "🏆",
    },

  ];

  return (

    <section
      id="flow"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-24">

          <p className="text-blue-900 font-bold tracking-[0.25em] mb-4 text-sm">

            ALUR BOOTCAMP

          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">

            Proses Belajar
            <span className="text-blue-900"> yang Terarah</span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Setiap peserta mengikuti alur pembelajaran intensif
            yang dirancang untuk membentuk skill,
            disiplin, dan kesiapan kerja profesional.

          </p>

        </div>

        {/* ================= FLOW ================= */}
        <div className="relative">

          {/* FLOW LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[6px] h-full -translate-x-1/2 overflow-hidden">

            <div className="w-full h-full bg-gradient-to-b from-blue-300 via-cyan-400 to-blue-500 rounded-full opacity-40"></div>

          </div>

          {/* STEPS */}
          <div className="space-y-24">

            {steps.map((step, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* EMPTY SPACE */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* CENTER ICON */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex z-20">

                  <div className="w-20 h-20 rounded-full bg-white border-4 border-cyan-400 shadow-xl flex items-center justify-center text-3xl hover:scale-110 transition duration-300">

                    {step.icon}

                  </div>

                </div>

                {/* CARD */}
                <div className="w-full md:w-1/2">

                  <div className="relative bg-white border border-blue-100 rounded-[32px] p-8 md:p-10 shadow-sm shadow-gray-200/50 hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-300 overflow-hidden group">

                    {/* WATER GLOW */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    {/* NUMBER */}
                    <div className="absolute top-4 right-6 text-6xl font-black text-blue-100 group-hover:text-blue-200 transition duration-300">

                      {step.number}

                    </div>

                    {/* MOBILE ICON */}
                    <div className="md:hidden text-5xl mb-6">

                      {step.icon}

                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10">

                      <h3 className="text-3xl font-black text-gray-900 mb-5 group-hover:text-blue-900 transition duration-300">

                        {step.title}

                      </h3>

                      <p className="text-gray-600 leading-relaxed text-lg">

                        {step.description}

                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default BootcampFlow;