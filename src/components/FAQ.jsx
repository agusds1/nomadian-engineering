import { useState } from "react";

function FAQ() {

  const faqs = [

    {
      question: "Apakah program ini cocok untuk pemula?",
      answer:
        "Ya. Program dirancang mulai dari dasar hingga kompetensi industri sehingga dapat diikuti oleh pemula maupun peserta yang ingin meningkatkan skill.",
    },

    {
      question: "Apakah peserta wajib tinggal di mess?",
      answer:
        "Ya. Sistem residensial merupakan bagian penting dari pembentukan disiplin, lingkungan belajar, dan budaya kerja profesional.",
    },

    {
      question: "Apakah ada sertifikat kelulusan?",
      answer:
        "Peserta yang memenuhi standar kompetensi akan mendapatkan sertifikat dan predikat kelulusan sesuai capaian program.",
    },

    {
      question: "Apakah ada program magang industri?",
      answer:
        "Peserta terbaik akan diprioritaskan mengikuti program magang industri bersama perusahaan rekanan Nomadian Engineering.",
    },

    {
      question: "Apakah setelah lulus bisa langsung bekerja?",
      answer:
        "Nomadian Engineering menyediakan jalur penempatan kerja dan talent pool untuk membantu lulusan terhubung dengan perusahaan partner.",
    },

    {
      question: "Apakah tersedia sistem pembayaran bertahap?",
      answer:
        "Ya. Untuk peserta tertentu tersedia opsi pembayaran bertahap sesuai kebijakan lembaga.",
    },

    {
      question: "Berapa lama durasi bootcamp berlangsung?",
      answer:
        "Program bootcamp berlangsung selama 3 bulan intensif dengan sistem pembelajaran residensial dan project simulation.",
    },

    {
      question: "Apakah ada batas usia peserta?",
      answer:
        "Program terbuka untuk lulusan SMK, mahasiswa, maupun fresh graduate dengan semangat belajar tinggi dan komitmen penuh.",
    },

    {
      question: "Apakah peserta mendapat project nyata?",
      answer:
        "Ya. Peserta akan mengerjakan simulasi project engineering dan konstruksi berbasis kebutuhan industri modern.",
    },

    {
      question: "Apakah tersedia mentoring selama program?",
      answer:
        "Peserta mendapatkan pendampingan intensif dari mentor dan evaluasi rutin selama proses bootcamp berlangsung.",
    },

    {
      question: "Apakah harus memiliki laptop sendiri?",
      answer:
        "Ya. Peserta disarankan membawa laptop pribadi agar proses pembelajaran software engineering berjalan optimal.",
    },

    {
      question: "Bagaimana sistem pembelajaran di Nomadian?",
      answer:
        "Pembelajaran dilakukan secara intensif melalui praktik langsung, simulasi project, teamwork, dan pembentukan budaya kerja profesional.",
    },

  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <section
      id="faq"
      className="py-18 md:py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden"
    >

      <div className="max-w-5xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">

          <p className="text-blue-900 font-bold tracking-[0.25em] mb-4 text-sm">

            FAQ

          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">

            Pertanyaan yang
            <span className="text-blue-900"> Sering Ditanyakan</span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">

            Temukan jawaban mengenai program,
            sistem bootcamp, fasilitas,
            dan penempatan kerja Nomadian Engineering.

          </p>

        </div>

        {/* ================= FAQ LIST ================= */}
        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white border border-blue-100 rounded-[24px] shadow-sm shadow-gray-200/50 hover:border-blue-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300 overflow-hidden group"
            >

              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 md:px-8 md:py-6"
              >

                <h3 className="text-lg md:text-xl font-black text-gray-900 pr-5 leading-snug group-hover:text-blue-900 transition duration-300">

                  {faq.question}

                </h3>

                <span
                  className={`text-2xl text-blue-900 font-bold transition-transform duration-300 ${
                    activeIndex === index
                      ? "rotate-90"
                      : "rotate-0"
                  }`}
                >

                  ›

                </span>

              </button>

              {/* ANSWER */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >

                <div className="px-6 pb-6 md:px-8 md:pb-8">

                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">

                    {faq.answer}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default FAQ;