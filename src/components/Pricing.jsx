function Pricing() {

  return (

    <section
      id="pricing"
      className="py-20 md:py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">

          <p className="text-blue-900 font-bold tracking-[0.25em] mb-4 text-sm">

            BIAYA PROGRAM

          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">

            Investasi Untuk
            <span className="text-blue-900"> Masa Depan Karirmu</span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Program intensif residensial dengan fasilitas lengkap,
            pembelajaran berbasis project, simulasi industri,
            dan penempatan kerja profesional.

          </p>

        </div>

        {/* ================= PRICING CARD ================= */}
        <div className="flex justify-center">

          <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white rounded-[36px] p-8 md:p-12 max-w-3xl w-full shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-300/30 transition-all duration-500 overflow-hidden group">

            {/* ================= GLOW ================= */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl group-hover:scale-125 transition duration-700"></div>

            <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-300/10 rounded-full blur-3xl"></div>

            {/* ================= BADGE ================= */}
            <div className="relative z-10 inline-flex items-center gap-2 bg-cyan-300 text-blue-950 font-black px-5 py-2 rounded-full text-xs tracking-[0.2em] mb-8 shadow-lg">

              🔥 MOST POPULAR

            </div>

            {/* ================= TITLE ================= */}
            <div className="relative z-10">

              <h3 className="text-3xl md:text-4xl font-black leading-tight mb-4">

                ACE Professional Bootcamp

              </h3>

              <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-2xl">

                Program pelatihan intensif berbasis kompetensi
                untuk dunia Architecture, Construction,
                dan Engineering modern.

              </p>

            </div>

            {/* ================= PRICE ================= */}
            <div className="relative z-10 mt-10">

              <div className="flex items-end gap-3 flex-wrap">

                <h2 className="text-5xl md:text-6xl font-black leading-none">

                  Rp 15JT

                </h2>

                <p className="text-blue-200 text-sm md:text-base mb-2">

                  / Full Program

                </p>

              </div>

              <p className="mt-4 text-blue-100 text-sm md:text-base">

                Residensial • Intensif 3 Bulan • Career Support

              </p>

            </div>

            {/* ================= FEATURES ================= */}
            <div className="relative z-10 mt-12 grid md:grid-cols-2 gap-5">

              <div className="flex items-start gap-4">

                <span className="text-cyan-300 text-xl">

                  ✔

                </span>

                <p className="text-sm md:text-base text-white/90 leading-relaxed">

                  Bootcamp residensial 3 bulan

                </p>

              </div>

              <div className="flex items-start gap-4">

                <span className="text-cyan-300 text-xl">

                  ✔

                </span>

                <p className="text-sm md:text-base text-white/90 leading-relaxed">

                  Mess & fasilitas harian lengkap

                </p>

              </div>

              <div className="flex items-start gap-4">

                <span className="text-cyan-300 text-xl">

                  ✔

                </span>

                <p className="text-sm md:text-base text-white/90 leading-relaxed">

                  AutoCAD & Engineering Project

                </p>

              </div>

              <div className="flex items-start gap-4">

                <span className="text-cyan-300 text-xl">

                  ✔

                </span>

                <p className="text-sm md:text-base text-white/90 leading-relaxed">

                  English for Construction

                </p>

              </div>

              <div className="flex items-start gap-4">

                <span className="text-cyan-300 text-xl">

                  ✔

                </span>

                <p className="text-sm md:text-base text-white/90 leading-relaxed">

                  Project simulation & evaluasi

                </p>

              </div>

              <div className="flex items-start gap-4">

                <span className="text-cyan-300 text-xl">

                  ✔

                </span>

                <p className="text-sm md:text-base text-white/90 leading-relaxed">

                  Magang & penempatan kerja

                </p>

              </div>

            </div>

            {/* ================= BUTTONS ================= */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-12">

              <a
                href="#contact"
                className="bg-white text-blue-900 font-black text-center px-8 py-4 rounded-2xl hover:bg-blue-50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                Daftar Sekarang

              </a>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white font-bold text-center px-8 py-4 rounded-2xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >

                Konsultasi Gratis

              </a>

            </div>

            {/* ================= NOTE ================= */}
            <p className="relative z-10 mt-8 text-blue-100/80 text-xs md:text-sm leading-relaxed">

              * Tersedia sistem pembayaran bertahap
              untuk peserta tertentu sesuai ketentuan
              Nomadian Engineering.

            </p>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Pricing;