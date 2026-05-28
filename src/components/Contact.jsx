function Contact() {

  return (

    <section
      id="contact"
      className="py-20 md:py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">

          <p className="text-blue-900 font-bold tracking-[0.25em] mb-4 text-sm">

            CONTACT

          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">

            Hubungi
            <span className="text-blue-900"> Nomadian</span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">

            Konsultasikan program bootcamp,
            jadwal batch, biaya pendidikan,
            dan peluang karir engineering bersama kami.

          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* ================= LEFT CARD ================= */}
          <div className="bg-white border border-blue-100 rounded-[32px] p-8 md:p-10 shadow-sm shadow-gray-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/40 transition-all duration-300">

            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">

              Informasi Kontak

            </h3>

            <div className="space-y-8">

              {/* ADDRESS */}
              <div>

                <p className="text-blue-900 font-black mb-3 text-sm tracking-wide">

                  📍 ALAMAT

                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">

                  Komplek Pertanian, Jalan Siaga No.25,
                  RT.02/RW.10, Loji,
                  Kec. Bogor Barat,
                  Kota Bogor,
                  Jawa Barat 16117

                </p>

              </div>

              {/* PHONE */}
              <div>

                <p className="text-blue-900 font-black mb-3 text-sm tracking-wide">

                  📞 WHATSAPP

                </p>

                <p className="text-gray-700 text-base md:text-lg">

                  08xxxxxxxxxx

                </p>

              </div>

              {/* EMAIL */}
              <div>

                <p className="text-blue-900 font-black mb-3 text-sm tracking-wide">

                  ✉️ EMAIL

                </p>

                <p className="text-gray-700 text-base md:text-lg">

                  nomadian@email.com

                </p>

              </div>

            </div>

            {/* ================= MAP ================= */}
            <div className="mt-10 overflow-hidden rounded-[24px] border border-blue-100 shadow-md">

              <iframe
                title="Nomadian Engineering Location"
                src="https://www.google.com/maps?q=Komplek%20Pertanian%20Jalan%20Siaga%20No.25%20Bogor&output=embed"
                width="100%"
                height="320"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>

            </div>

            {/* ================= BUTTON ================= */}
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-8 bg-green-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-green-600 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400/30 transition-all duration-300"
            >

              Chat WhatsApp

            </a>

          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="bg-white border border-blue-100 rounded-[32px] p-8 md:p-10 shadow-sm shadow-gray-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/40 transition-all duration-300">

            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">

              Form Pendaftaran

            </h3>

            <form className="space-y-5">

              {/* NAMA */}
              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">

                  Nama Lengkap

                </label>

                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                />

              </div>

              {/* ALAMAT */}
              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">

                  Alamat Rumah / Domisili

                </label>

                <textarea
                  rows="3"
                  placeholder="Masukkan alamat lengkap"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                ></textarea>

              </div>

              {/* NOMOR HP */}
              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">

                  Nomor HP / WhatsApp

                </label>

                <input
                  type="text"
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">

                  Email Aktif

                </label>

                <input
                  type="email"
                  placeholder="emailkamu@gmail.com"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                />

              </div>

              {/* PENDIDIKAN */}
              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">

                  Pendidikan Terakhir / Saat Ini

                </label>

                <input
                  type="text"
                  placeholder="SMK / Mahasiswa / Fresh Graduate"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                />

              </div>

              {/* JURUSAN */}
              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">

                  Jurusan Pendidikan

                </label>

                <input
                  type="text"
                  placeholder="Teknik Sipil / Arsitektur / Mesin / dll"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                />

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full mt-4 bg-blue-900 text-white py-5 rounded-2xl font-black text-base hover:bg-blue-800 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-300"
              >

                Kirim Pendaftaran

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Contact;