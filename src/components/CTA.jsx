function CTA() {

  return (

    <section className="py-20 md:py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-[36px] p-8 md:p-14 shadow-xl hover:-translate-y-2 hover:shadow-cyan-300/40 transition-all duration-500 overflow-hidden">

          {/* ================= GLOW EFFECT ================= */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-300/10 rounded-full blur-3xl"></div>

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

            {/* ================= LEFT ================= */}
            <div>

              <p className="font-bold tracking-[0.25em] text-cyan-100 mb-4 text-sm">

                GABUNG SEKARANG

              </p>

              <h2 className="text-3xl md:text-4xl font-black leading-tight text-white">

                Bangun Masa Depan
                Engineering-mu
                Bersama Nomadian

              </h2>

              <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl">

                Bootcamp intensif berbasis kompetensi,
                project simulation, magang industri,
                dan penempatan kerja untuk generasi
                engineering masa depan.

              </p>

            </div>

            {/* ================= RIGHT ================= */}
            <div className="flex flex-col gap-5">

              {/* BUTTON 1 */}
              <a
                href="#contact"
                className="bg-white text-blue-900 font-black text-lg px-8 py-5 rounded-2xl text-center hover:bg-blue-50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                Daftar Sekarang

              </a>

              {/* BUTTON 2 */}
              <a
                href="https://wa.me/6281213129318"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-black text-lg px-8 py-5 rounded-2xl text-center hover:bg-green-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300"
              >

                WhatsApp Konsultasi

              </a>

              {/* MINI INFO */}
              <div className="flex items-center gap-3 text-white/90 text-sm mt-2">

                <span className="text-lg">⚡</span>

                <p>

                  Pendaftaran terbatas untuk menjaga kualitas pembelajaran.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default CTA;