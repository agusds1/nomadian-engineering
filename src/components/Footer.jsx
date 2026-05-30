function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* TOP */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-10 py-12 border-b border-white/10">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3 mb-4">

              <img
                src="/logo.jpeg"
                alt="Nomadian Engineering"
                className="w-12 h-12 rounded-lg object-cover"
              />

              <div>

                <h3 className="font-black text-xl">
                  NOMADIAN
                </h3>

                <p className="text-xs text-gray-400 tracking-wider">
                  ENGINEERING
                </p>

              </div>

            </div>

            <p className="text-gray-300 leading-relaxed text-sm max-w-sm">

              Bootcamp Architecture, Construction,
              dan Engineering berbasis kompetensi,
              project simulation, magang industri,
              dan penempatan kerja.

            </p>

          </div>

          {/* NAVIGATION */}
          <div className="flex gap-12">

          {/* NAVIGATION */}
          <div>

            <h3 className="font-black text-lg mb-4">
              Navigasi
            </h3>

            <div className="space-y-2 text-gray-300">

              <a href="#about" className="block hover:text-cyan-300 transition">
                Tentang
              </a>

              <a href="#programs" className="block hover:text-cyan-300 transition">
                Program
              </a>

              <a href="#benefits" className="block hover:text-cyan-300 transition">
                Keunggulan
              </a>

              <a href="#pricing" className="block hover:text-cyan-300 transition">
                Harga
              </a>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="font-black text-lg mb-4">
              Kontak
            </h3>

            <div className="space-y-3 text-gray-300 text-sm">

             <p>📍 Bogor, Jawa Barat</p>

            <p>📞 081213129318</p>

            <p>✉️ info@nomadian.com</p>

           </div>

           </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="py-4 flex flex-col md:flex-row justify-between items-center gap-2">

          <p className="text-gray-400 text-sm">

            © 2026 Nomadian Engineering. All rights reserved.

          </p>

          <div className="flex items-center gap-2 text-sm text-gray-400">

            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>

            <p>

              Designed for future engineers.

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;