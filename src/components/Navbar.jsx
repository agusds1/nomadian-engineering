import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { id: "about", label: "Tentang" },
    { id: "programs", label: "Program" },
    { id: "benefits", label: "Keunggulan" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Testimoni" },
    { id: "flow", label: "Alur" },
    { id: "pricing", label: "Harga" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Kontak" },
  ];

  useEffect(() => {

    const handleScroll = () => {

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      sections.forEach((section) => {

        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(section.id);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b border-white/20 shadow-sm">

      <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex justify-between items-center">

        {/* ================= LOGO ================= */}
        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src="/logo.jpeg"
            alt="Nomadian Engineering"
            className="h-10 md:h-12 w-auto object-contain"
          />

          <div>

            <h1 className="text-lg md:text-xl font-black text-blue-900 leading-none">
              NOMADIAN
            </h1>

            <p className="text-[10px] md:text-xs text-gray-500 tracking-wider">
              ENGINEERING
            </p>

          </div>

        </div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden lg:flex gap-7 text-sm font-semibold">

          {navItems.map((item) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative transition-all duration-300

              ${
                activeSection === item.id
                  ? "text-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }

              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:bg-blue-900
              after:transition-all after:duration-300

              ${
                activeSection === item.id
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }
              `}
            >

              {item.label}

            </a>

          ))}

        </div>

        {/* ================= DESKTOP BUTTON ================= */}
        <a
          href="#contact"
          className="hidden lg:flex bg-blue-900 text-white px-6 py-3 rounded-2xl font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >

          Daftar

        </a>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-blue-900"
        >

          {isOpen ? <X size={30} /> : <Menu size={30} />}

        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300

        ${
          isOpen
            ? "max-h-[700px]"
            : "max-h-0"
        }
        `}
      >

        <div className="px-6 pb-8 flex flex-col gap-5 bg-white/95 backdrop-blur-lg border-t border-gray-200">

          {navItems.map((item) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`font-semibold transition

              ${
                activeSection === item.id
                  ? "text-blue-900"
                  : "text-gray-700"
              }
              `}
            >

              {item.label}

            </a>

          ))}

          {/* Mobile Button */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-blue-900 text-white px-6 py-4 rounded-2xl font-bold text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >

            Daftar Sekarang

          </a>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;