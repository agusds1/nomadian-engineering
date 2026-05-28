import { motion } from "framer-motion";
function About() {
  return (

    <motion.section
     initial={{ opacity: 0, y: 100 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="about"
      className="py-20 md:py-24 bg-white"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-blue-900 font-bold tracking-widest mb-4">
            TENTANG NOMADIAN
          </p>

          <h2 className="text-4xl md:text-4xl leading-tight font-black text-gray-900">

            Menyiapkan Tenaga
            <span className="text-blue-900"> Engineering </span>
            Siap Kerja

          </h2>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Nomadian Engineering hadir untuk menjembatani
            kesenjangan antara kebutuhan industri konstruksi
            modern dengan ketersediaan tenaga teknik terampil
            yang siap bekerja secara profesional.

          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="p-8 border border-blue-100 rounded-3xl bg-white shadow-sm shadow-gray-300/30 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 group">

            <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">
              🏗️
            </div>

            <h3 className="text-xl font-black text-gray-900 mb-5">
              Industry Based
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">

              Kurikulum disusun berdasarkan kebutuhan nyata
              industri Architecture, Construction, dan Engineering.

            </p>

          </div>

          {/* Card 2 */}
          <div className="p-8 border border-blue-100 rounded-3xl bg-white shadow-sm shadow-gray-300/30 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 group">

            <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">
              🎯
            </div>

            <h3 className="text-xl font-black text-gray-900 mb-5">
              Competency Focused
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">

              Sistem asesmen dirancang untuk memastikan
              setiap peserta memiliki kompetensi yang terukur
              dan dapat dipertanggungjawabkan.

            </p>

          </div>

          {/* Card 3 */}
          <div className="p-8 border border-blue-100 rounded-3xl bg-white shadow-sm shadow-gray-300/30 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 group">

            <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">
              🚀
            </div>

            <h3 className="text-xl font-black text-gray-900 mb-5">
              Career Pipeline
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">

              Bukan hanya pelatihan, tetapi alur lengkap:
              bootcamp, asesmen, magang, hingga
              penempatan kerja industri.

            </p>

          </div>

        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 to-blue-700 rounded-[40px] p-12 text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>

              <p className="font-bold tracking-widest text-blue-200 mb-4">
                KENAPA NOMADIAN?
              </p>

              <h3 className="text-4xl font-black leading-tight">

                Fokus pada
                Kompetensi &
                Penempatan Kerja

              </h3>

            </div>

            {/* Right */}
            <div className="space-y-5 text-lg text-blue-100">

              <div className="flex items-start gap-4">
                <span className="text-xl">✔</span>
                <p>Bootcamp intensif residensial 3 bulan</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl">✔</span>
                <p>Magang industri & penyaluran kerja</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl">✔</span>
                <p>English environment & project simulation</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl">✔</span>
                <p>Kurikulum berbasis kebutuhan industri nyata</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </motion.section>

  );
}

export default About;