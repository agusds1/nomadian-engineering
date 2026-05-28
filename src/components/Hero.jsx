function Hero() {

  return (

    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-28 pb-16 md:pt-32 md:pb-24">

      {/* Glow Background */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT ================= */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center bg-blue-100 text-blue-900 px-5 py-2 rounded-full font-semibold text-[12px] md:text-sm tracking-wide shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            BOOTCAMP ENGINEERING SIAP KERJA

          </div>

          {/* Heading */}
          <h1 className="mt-6 text-[42px] sm:text-[52px] lg:text-[72px] leading-[1.05] font-black text-gray-900">

            Bangun Karir
            <span className="text-blue-900"> Engineering </span>
            Bersama Nomadian

          </h1>

          {/* Description */}
          <p className="mt-6 text-[16px] md:text-[19px] leading-relaxed text-gray-600 max-w-2xl">

            Program pelatihan intensif 3 bulan berbasis kompetensi:
            AutoCAD, Manajemen Konstruksi, Engineering,
            English for Construction, dan Microsoft Office
            dengan sistem magang serta penyaluran kerja.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <a
              href="#contact"
              className="bg-blue-900 text-white px-8 py-4 rounded-2xl text-center font-bold hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300"
            >

              Daftar Sekarang

            </a>

            <a
              href="https://wa.me/6281213129318?text=Halo%20saya%20ingin%20konsultasi%20program%20bootcamp"
              target="_blank"
              className="border border-blue-900 text-blue-900 px-8 py-4 rounded-2xl text-center font-bold hover:bg-blue-50 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >

              Konsultasi Gratis

            </a>

          </div>

          {/* Small Info */}
          <div className="mt-10 flex flex-wrap gap-5 text-[14px] md:text-base text-gray-700">

            <div className="flex items-center gap-2">
              <span className="text-green-600">✔</span>
              <span>Bootcamp Residensial</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-600">✔</span>
              <span>Magang Industri</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-600">✔</span>
              <span>Penyaluran Kerja</span>
            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex justify-center">

          <div className="w-full max-w-xl bg-white border border-blue-100 rounded-[36px] p-6 md:p-10 shadow-xl shadow-blue-100/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

            {/* Top */}
            <div>

              <h2 className="text-[28px] md:text-[34px] font-black text-gray-900 leading-tight">

                ACE Professional Bootcamp

              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed text-[15px] md:text-[17px]">

                Program intensif berbasis kompetensi industri
                Architecture, Construction, & Engineering.

              </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              {[
                ["3", "Bulan Intensif"],
                ["30", "Peserta / Batch"],
                ["5", "Mata Pelajaran"],
                ["100%", "Fokus Kompetensi"],
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-blue-50 rounded-3xl p-5 hover:-translate-y-2 hover:bg-blue-100 hover:shadow-xl transition-all duration-300"
                >

                  <h3 className="text-[28px] font-black text-blue-900">
                    {item[0]}
                  </h3>

                  <p className="mt-2 text-gray-700 text-sm md:text-base">
                    {item[1]}
                  </p>

                </div>

              ))}

            </div>

            {/* Bottom Box */}
            <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-6 text-white hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300">

              <h3 className="text-[24px] md:text-[28px] font-black leading-tight">

                Magang & Penempatan Kerja

              </h3>

              <p className="mt-4 text-blue-100 leading-relaxed text-[15px] md:text-[17px]">

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