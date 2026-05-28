import { CountUp } from "react-countup";

function Hero() {
  return (

    <section className="relative min-h-screen pt-10 pb-5 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* ================= LEFT CONTENT ================= */}
        <div>

          {/* Badge */}
          <div className="inline-block bg-blue-100 text-blue-900 px-5 py-2 rounded-full font-semibold text-sm tracking-wide mb-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            BOOTCAMP ENGINEERING SIAP KERJA

          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-gray-900">

            Bangun Karir
            <span className="text-blue-900"> Engineering </span>
            Bersama Nomadian

          </h1>

          {/* Description */}
          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">

            Program pelatihan intensif 3 bulan berbasis kompetensi:
            AutoCAD, Manajemen Konstruksi, Engineering,
            English for Construction, dan Microsoft Office
            dengan sistem magang serta penyaluran kerja.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
            href="#contact"
            className="bg-blue-900 text-white px-8 py-4 rounded-2xl font-semibold shadow-md shadow-blue-900/30 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 inline-block">

              Daftar Sekarang

            </a>

              <a
              href="https://wa.me/6281213129318?text=Halo%20saya%20ingin%20konsultasi%20program%20bootcamp"
              target="_blank"
              className="border border-blue-900 text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 inline-block">

              Konsultasi Gratis

            </a>

          </div>

          {/* Small Info */}
          <div className="flex flex-wrap gap-6 mt-12 text-gray-700">

            <div className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✔</span>
              <span>Bootcamp Residensial</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✔</span>
              <span>Magang Industri</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✔</span>
              <span>Penyaluran Kerja</span>
            </div>

          </div>

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex justify-center">

          <div className="bg-white border border-blue-100 p-8 rounded-[40px] shadow-lg shadow-gray-400/30 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 max-w-xl w-full">

            {/* Top */}
            <div className="mb-10">

              <h2 className="text-2xl font-black text-gray-900">
                ACE Professional Bootcamp
              </h2>

              <p className="text-gray-500 mt-3 leading-relaxed">
                Program intensif berbasis kompetensi industri
                Architecture, Construction, & Engineering.
              </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">

              {/* Card 1 */}
              <div className="p-5 rounded-3xl bg-blue-50 shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">

                <h3 className="text-2xl font-black text-blue-900">
                  3
                </h3>

                <p className="text-gray-700 mt-2">
                  Bulan Intensif
                </p>

              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-3xl bg-blue-50 shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">

                <h3 className="text-2xl font-black text-blue-900">
                  30
                </h3>

                <p className="text-gray-700 mt-2">
                  Peserta / Batch
                </p>

              </div>

              {/* Card 3 */}
              <div className="p-5 rounded-3xl bg-blue-50 shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">

                <h3 className="text-2xl font-black text-blue-900">
                  5
                </h3>

                <p className="text-gray-700 mt-2">
                  Mata Pelajaran
                </p>

              </div>

              {/* Card 4 */}
              <div className="p-5 rounded-3xl bg-blue-50 shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">

                <h3 className="text-2xl font-black text-blue-900">
                  100%
                </h3>

                <p className="text-gray-700 mt-2">
                  Fokus Kompetensi
                </p>

              </div>

            </div>

            {/* Bottom Box */}
            <div className="mt-10 bg-gradient-to-r from-blue-900 to-blue-700 p-5 rounded-3xl text-white shadow-md hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">

              <h3 className="text-2xl font-bold">
                Magang & Penempatan Kerja
              </h3>

              <p className="mt-3 text-blue-100 leading-relaxed">
                Lulusan terbaik akan diprioritaskan untuk
                magang dan direkomendasikan langsung
                ke perusahaan rekanan Nomadian Engineering.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;