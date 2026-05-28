import { motion } from "framer-motion";

function About() {

  return (

    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="about"
      className="py-20 md:py-28 bg-white overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">

          <p className="text-blue-900 font-bold tracking-[0.2em] text-sm mb-4">

            TENTANG NOMADIAN

          </p>

          <h2 className="text-[34px] sm:text-[42px] lg:text-[58px] leading-[1.1] font-black text-gray-900">

            Menyiapkan Tenaga
            <span className="text-blue-900"> Engineering </span>
            Siap Kerja

          </h2>

          <p className="mt-6 text-[16px] md:text-[19px] text-gray-600 leading-relaxed">

            Nomadian Engineering hadir untuk menjembatani
            kebutuhan industri konstruksi modern dengan
            tenaga teknik terampil yang siap bekerja
            secara profesional dan kompeten.

          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">

          {[
            {
              icon: "🏗️",
              title: "Industry Based",
              desc: "Kurikulum disusun berdasarkan kebutuhan nyata industri Architecture, Construction, dan Engineering.",
            },

            {
              icon: "🎯",
              title: "Competency Focused",
              desc: "Sistem asesmen memastikan setiap peserta memiliki kompetensi yang terukur dan siap diterapkan.",
            },

            {
              icon: "🚀",
              title: "Career Pipeline",
              desc: "Alur lengkap mulai dari bootcamp, evaluasi kompetensi, magang, hingga penempatan kerja.",
            },

          ].map((item, index) => (

            <div
              key={index}
              className="group bg-white border border-blue-100 rounded-[32px] p-7 md:p-9 shadow-sm hover:bg-blue-50 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >

              {/* Icon */}
              <div className="text-5xl mb-5 group-hover:scale-110 transition duration-300">

                {item.icon}

              </div>

              {/* Title */}
              <h3 className="text-[24px] md:text-[28px] font-black text-gray-900 mb-4">

                {item.title}

              </h3>

              {/* Description */}
              <p className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

        {/* ================= BOTTOM HIGHLIGHT ================= */}
        <div className="mt-16 md:mt-20">

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-[36px] md:rounded-[42px] p-8 md:p-14 text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* LEFT */}
              <div>

                <p className="text-blue-200 font-bold tracking-[0.2em] text-sm mb-4">

                  KENAPA NOMADIAN?

                </p>

                <h3 className="text-[32px] md:text-[48px] leading-[1.1] font-black">

                  Fokus pada
                  Kompetensi &
                  Penempatan Kerja

                </h3>

              </div>

              {/* RIGHT */}
              <div className="space-y-5">

                {[
                  "Bootcamp intensif residensial 3 bulan",
                  "Magang industri & penyaluran kerja",
                  "English environment & project simulation",
                  "Kurikulum berbasis kebutuhan industri nyata",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4 text-[15px] md:text-[18px] text-blue-100"
                  >

                    <span className="text-cyan-300 text-xl">

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

    </motion.section>

  );
}

export default About;