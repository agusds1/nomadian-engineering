import ReactGA from "react-ga4";
import {
  FaWhatsapp,
  FaInstagram
} from "react-icons/fa";

import {
  MdEmail
} from "react-icons/md";


function FloatingContact({ open, setOpen }) {

  return (

    <div className="fixed bottom-6 right-5 z-50">

      {open && (

        <div className="absolute bottom-20 right-0 flex flex-col items-center gap-3">

        {/* WhatsApp */}
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

        {/* Email */}
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

         {/* Instagram */}
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

      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-green-500 text-white text-2xl shadow-2xl hover:scale-110 transition-all duration-300"
      >
        {open ? "✕" : "💬"}
      </button>

    </div>

  );
}

export default FloatingContact;