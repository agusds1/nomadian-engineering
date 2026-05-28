function Footer() {

  return (

    <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-20 pb-10 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= TOP ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">

            <div className="inline-block mb-5">

              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] text-cyan-200">

                NOMADIAN ENGINEERING

              </div>

            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">

              Bangun Skill,
              Bangun Karir,
              Bangun Masa Depan.

            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed text-base max-w-xl">

              Lembaga pelatihan berbasis kompetensi
              Architecture, Construction, dan Engineering
              dengan sistem bootcamp intensif,
              project simulation, magang industri,
              dan penempatan kerja.

            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:-translate-y-1 transition-all duration-300"
              >

                🌐

              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:-translate-y-1 transition-all duration-300"
              >

                📷

              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-red-500 hover:-translate-y-1 transition-all duration-300"
              >

                ▶️

              </a>

            </div>

          </div>

          {/* ================= NAVIGATION ================= */}
          <div>

            <h3 className="text-xl font-black mb-6 text-white">

              Navigasi

            </h3>

            <div className="space-y-4 text-gray-300">

              <a
                href="#about"
                className="block hover:text-cyan-300 hover:translate-x-1 transition-all duration-300"
              >

                Tentang Kami

              </a>

              <a
                href="#programs"
                className="block hover:text-cyan-300 hover:translate-x-1 transition-all duration-300"
              >

                Program

              </a>

              <a
                href="#benefits"
                className="block hover:text-cyan-300 hover:translate-x-1 transition-all duration-300"
              >

                Benefits

              </a>

              <a
                href="#gallery"
                className="block hover:text-cyan-300 hover:translate-x-1 transition-all duration-300"
              >

                Gallery

              </a>

              <a
                href="#testimonials"
                className="block hover:text-cyan-300 hover:translate-x-1 transition-all duration-300"
              >

                Testimoni

              </a>

            </div>

          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-xl font-black mb-6 text-white">

              Kontak

            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex items-start gap-3">

                <span className="text-cyan-300 text-lg">

                  📍

                </span>

                <p>

                  Bogor, Jawa Barat

                </p>

              </div>

              <div className="flex items-start gap-3">

                <span className="text-cyan-300 text-lg">

                  📞

                </span>

                <p>

                  08xxxxxxxxxx

                </p>

              </div>

              <div className="flex items-start gap-3">

                <span className="text-cyan-300 text-lg">

                  ✉️

                </span>

                <p>

                  nomadian@email.com

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400 text-sm text-center md:text-left">

            © 2026 Nomadian Engineering.
            All rights reserved.

          </p>

          <div className="flex items-center gap-3 text-sm text-gray-400">

            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>

            <p>

              Designed with passion for future engineers.

            </p>

          </div>

        </div>

      </div>

    </footer>

  );
}

export default Footer;