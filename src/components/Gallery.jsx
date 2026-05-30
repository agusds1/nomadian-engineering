function Gallery() {

  const projects = [

    {
      title: "AutoCAD Drafting",
      category: "Engineering Design",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Construction Project",
      category: "Project Simulation",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Engineering Design",
      category: "Technical Training",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Site Inspection",
      category: "Field Practice",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Team Collaboration",
      category: "Engineering Team",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Project Discussion",
      category: "Bootcamp Activity",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Construction Planning",
      category: "Management Training",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Engineering Workspace",
      category: "Professional Environment",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    },

  ];

  return (

    <section
      id="gallery"
      className="py-18 md:py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">

          <p className="text-blue-900 font-bold tracking-[0.25em] mb-4 text-sm">

            GALLERY

          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">

            Aktivitas &
            <span className="text-blue-900"> Simulasi Project</span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Dokumentasi kegiatan bootcamp, simulasi project,
            hingga proses pembelajaran berbasis industri modern.

          </p>

        </div>

        {/* ================= AUTO SLIDER ================= */}
        <div className="relative overflow-hidden">

          <div className="flex gap-6 animate-gallery-slide w-max">

            {[...projects, ...projects].map((project, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px]
                bg-white border border-blue-100
                shadow-sm shadow-gray-200/50
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-blue-200/30
                transition-all duration-300
                w-[280px] md:w-[340px] flex-shrink-0"
              >

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[320px] md:h-[360px] object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 p-6 w-full">

                  {/* Category */}
                  <div className="inline-block mb-3 bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wide px-4 py-2 rounded-full">

                    {project.category}

                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-white leading-tight group-hover:translate-x-1 transition duration-300">

                    {project.title}

                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default Gallery;