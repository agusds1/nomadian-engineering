import { useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram
} from "react-icons/fa";

import {
  MdEmail
} from "react-icons/md";


function FloatingContact({ open, setOpen }) {
  const menuRef = useRef(null);
    useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, [setOpen]);

  return (

    <div 
    ref={menuRef}
    className="fixed bottom-6 right-5 z-50">

      {open && (

        <div className="absolute bottom-20 right-0 flex flex-col items-center gap-3">

        {/* WhatsApp */}
        <div className="relative group">

          <span
            className="
              absolute right-16 top-1/2
              -translate-y-1/2
              bg-gray-900 text-white
              text-xs px-3 py-1 rounded-lg
              opacity-0 group-hover:opacity-100
              transition-all duration-300
              whitespace-nowrap
              pointer-events-none
            "
          >
          Chat WhatsApp
          </span>
          <a
            href="https://wa.me/6281213129318"
            onClick={() => {
              ReactGA.event({
                category: "Contact",
                action: "Click WhatsApp",
                label: "Floating Contact",
                });
              }}
              target="_blank"
              rel="noreferrer"
              className="
              w-14 h-14
              bg-white
              rounded-full
              shadow-xl
              flex items-center justify-center
              hover:scale-110
              transition-all duration-300
              "
              >
            <FaWhatsapp
              size={30}
              className="text-green-500"
            />
          </a>

        </div>

        {/* Email */}
        <div className="relative group">
          <span
            className="
              absolute right-16 top-1/2
              -translate-y-1/2
              bg-gray-900 text-white
              text-xs px-3 py-1 rounded-lg
              opacity-0 group-hover:opacity-100
              transition-all duration-300
              whitespace-nowrap
              pointer-events-none
            "
          >
          Kirim Email
          </span>
          
          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=arcadian.lpk@gmail.com&su=Informasi%20Bootcamp%20Nomadian"
          onClick={() => {
          ReactGA.event({
            category: "Contact",
            action: "Click Email",
            label: "Floating Contact",
          });
         }}
          target="_blank"
          rel="noreferrer"
          className="
          w-14 h-14
          bg-white
          rounded-full
          shadow-xl
          flex items-center justify-center
          hover:scale-110
          transition-all duration-300
          "
          >
          <MdEmail
          size={30}
          className="text-red-500"
          />
          </a>
        </div>

        {/* Instagram */}
        <div className="relative group">
          <span
            className="
            absolute right-16 top-1/2
            -translate-y-1/2
            bg-gray-900 text-white
            text-xs px-3 py-1 rounded-lg
            opacity-0 group-hover:opacity-100
            transition-all duration-300
            whitespace-nowrap
            pointer-events-none
            "
          >
         Instagram
         </span>

          <a
          href="https://instagram.com/nomadian.engineering"
          onClick={() => {
            ReactGA.event({
              category: "Contact",
              action: "Click Instagram",
              label: "Floating Contact",
            });
          }}
          target="_blank"
          rel="noreferrer"
          className="
            w-14 h-14
            bg-white
            rounded-full
            shadow-xl
            flex items-center justify-center
            hover:scale-110
            transition-all duration-300
          "
          >
         <FaInstagram
         size={28}
          className="text-pink-500"
            />
          </a>

        </div>
      </div>

      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-green-600 text-white text-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
      >
        {open ? (  <X size={28} />
        ) : (
  <MessageCircle size={26} />
        )}
        </button>

    </div>

  );
}

export default FloatingContact;