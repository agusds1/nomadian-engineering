import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b border-white/20 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* ================= LOGO ================= */}
        <h1 className="text-2xl md:text-3xl font-black text-blue-900 tracking-wide cursor-pointer hover:scale-105 transition duration-300">

          NOMADIAN

        </h1>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden lg:flex gap-8 text-gray-700 font-semibold text-sm">

          <a
            href="#about"
            className="relative hover:text-blue-900 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all hover:after:w-full"
          >
            Tentang
          </a>

          <a
            href="#programs"
            className="relative hover:text-blue-900 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all hover:after:w-full"
          >
            Program
          </a>

          <a
            href="#benefits"
            className="relative hover:text-blue-900 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all hover:after:w-full"
          >
            Keunggulan
          </a>

          <a
            href="#gallery"
            className="relative hover:text-blue-900 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all hover:after:w-full"
          >
            Gallery
          </a>

          <a
            href="#testimonials"
            className="relative hover:text-blue-900 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all hover:after:w-full"
          >
            Testimoni
          </a>

          <a
            href="#flow"
            className="relative hover:text-blue-900 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all hover:after:w-full"
          >
            Alur
          </a>

          <a
            href="#pricing"
            className="relative hover:text-blue-900 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all hover:after:w-full"
          >
            Harga
          </a>

          <a
            href="#faq"
            className="relative hover:text-blue-900 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all hover:after:w-full"
          >
            FAQ
          </a>

          <a
            href="#contact"
            className="relative hover:text-blue-900 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all hover:after:w-full"
          >
            Kontak
          </a>

        </div>

        {/* ================= DESKTOP BUTTON ================= */}
        <button className="hidden lg:block bg-blue-900 text-white px-6 py-3 rounded-2xl font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

          Daftar

        </button>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-blue-900"
        >

          {isOpen ? <X size={32} /> : <Menu size={32} />}

        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[700px]" : "max-h-0"
        }`}
      >

        <div className="px-6 pb-8 flex flex-col gap-5 bg-white/95 backdrop-blur-lg border-t border-gray-200">

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 font-semibold hover:text-blue-900 transition"
          >
            Tentang
          </a>

          <a
            href="#programs"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 font-semibold hover:text-blue-900 transition"
          >
            Program
          </a>

          <a
            href="#benefits"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 font-semibold hover:text-blue-900 transition"
          >
            Keunggulan
          </a>

          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 font-semibold hover:text-blue-900 transition"
          >
            Gallery
          </a>

          <a
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 font-semibold hover:text-blue-900 transition"
          >
            Testimoni
          </a>

          <a
            href="#flow"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 font-semibold hover:text-blue-900 transition"
          >
            Alur
          </a>

          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 font-semibold hover:text-blue-900 transition"
          >
            Harga
          </a>

          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 font-semibold hover:text-blue-900 transition"
          >
            FAQ
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 font-semibold hover:text-blue-900 transition"
          >
            Kontak
          </a>

          {/* Mobile Button */}
          <button className="mt-4 bg-blue-900 text-white px-6 py-4 rounded-2xl font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            Daftar Sekarang

          </button>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;