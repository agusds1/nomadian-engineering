import { useEffect, useState } from "react";

function Testimonial() {

  const testimonials = [

    {
      name: "Ahmad Rizki",
      role: "AutoCAD Student",
      comment:
        "Bootcamp ini benar-benar mengubah cara saya belajar engineering. Materinya intensif dan sangat relevan dengan dunia kerja.",
      avatar:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
    },

    {
      name: "Dimas Pratama",
      role: "Engineering Student",
      comment:
        "Saya mendapatkan pengalaman project simulation yang sebelumnya tidak pernah saya dapatkan di sekolah maupun kursus biasa.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },

    {
      name: "Nabila Putri",
      role: "Construction Management",
      comment:
        "Lingkungan residensial membuat saya jauh lebih disiplin dan fokus belajar dibanding belajar sendiri di rumah.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },

    {
      name: "Rizky Maulana",
      role: "MEP Student",
      comment:
        "Mentornya sangat membantu dan suasana bootcamp membuat saya berkembang jauh lebih cepat dibanding belajar sendiri.",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },

    {
      name: "Salsa Aulia",
      role: "Engineering Bootcamp",
      comment:
        "Materinya praktis dan langsung dipakai dalam simulasi project. Sangat membantu untuk persiapan dunia kerja.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    },

    {
      name: "Fajar Nugraha",
      role: "Construction Student",
      comment:
        "Saya jadi lebih percaya diri menghadapi dunia industri karena pembelajarannya benar-benar realistis.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },

  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentIndex((prev) => prev + 1);

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section
      id="testimonials"
      className="py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">

          <p className="text-blue-900 font-bold tracking-[0.25em] mb-4 text-sm">

            TESTIMONI PESERTA

          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">

            Pengalaman Mereka
            <span className="text-blue-900"> Bersama Nomadian</span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Cerita dari peserta yang telah mengikuti
            bootcamp engineering intensif bersama Nomadian.

          </p>

        </div>

        {/* ================= SLIDER ================= */}
        <div className="overflow-hidden relative">

          <div
            className="flex gap-8 transition-transform duration-3000 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex % testimonials.length) * 33.5}%)`,
            }}
          >

            {duplicatedTestimonials.map((item, index) => (

              <div
                key={index}
                className="min-w-full md:min-w-[calc((100%-32px)/2)] lg:min-w-[calc((100%-64px)/3)]"
              >

                <div
                  className="bg-white border border-blue-100 rounded-[28px] p-8 shadow-sm shadow-gray-200/50 hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-200/40 transition-all duration-300 group h-full"
                >

                  {/* QUOTE */}
                  <div className="text-5xl text-blue-200 mb-6 group-hover:scale-110 transition duration-300">

                    “

                  </div>

                  {/* COMMENT */}
                  <p className="text-gray-600 group-hover:text-gray-700 transition duration-300 leading-relaxed text-base mb-8">

                    {item.comment}

                  </p>

                  {/* STARS */}
                  <div className="flex items-center gap-1 mb-6 text-yellow-400 text-lg">

                    ⭐ ⭐ ⭐ ⭐ ⭐

                  </div>

                  {/* PROFILE */}
                  <div className="flex items-center gap-4">

                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 group-hover:border-blue-400 transition duration-300"
                    />

                    <div>

                      <h3 className="text-lg font-black text-gray-900 group-hover:text-blue-900 transition duration-300">

                        {item.name}

                      </h3>

                      <p className="text-sm text-gray-500">

                        {item.role}

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default Testimonial;