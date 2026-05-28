import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Program", href: "#programs" },
    { name: "Keunggulan", href: "#benefits" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Alur", href: "#flow" },
    { name: "Harga", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#contact" },
  ];

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur-xl border-b border-white/20 shadow-sm">

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="flex justify-between items-center h-[78px]">

          {/* ================= LOGO ================= */}
          <a
            href="#"
            className="text-[22px] md:text-[28px] font-black tracking-wide text-blue-900 hover:scale-105 transition duration-300"
          >

            NOMADIAN

          </a>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((link, index) => (

              <a
                key={index}
                href={link.href}
                className="relative text-[15px] font-semibold text-gray-700 hover:text-blue-900 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >

                {link.name}

              </a>

            ))}

          </div>

          {/* ================= DESKTOP BUTTON ================= */}
          <a
            href="#contact"
            className="hidden lg:flex items-center bg-blue-900 text-white px-6 py-3 rounded-2xl font-bold hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300"
          >

            Daftar

          </a>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 text-blue-900 hover:bg-blue-100 transition"
          >

            {isOpen ? <X size={26} /> : <Menu size={26} />}

          </button>

        </div>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[800px]" : "max-h-0"
        }`}
      >

        <div className="mx-5 mb-5 p-6 rounded-[28px] bg-white/95 backdrop-blur-2xl border border-blue-100 shadow-2xl flex flex-col gap-1">

          {navLinks.map((link, index) => (

            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-5 py-4 rounded-2xl text-[16px] font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-300"
            >

              {link.name}

            </a>

          ))}

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-blue-900 text-white text-center py-4 rounded-2xl font-bold hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300"
          >

            Daftar Sekarang

          </a>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;