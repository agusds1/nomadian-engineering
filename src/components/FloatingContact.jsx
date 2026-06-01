function FloatingContact({ open, setOpen }) {

  return (

    <div className="fixed bottom-6 right-6 z-50">

      {open && (

        <div className="absolute bottom-20 right-0 flex flex-col items-end gap-3 transition-all duration-300">

          <a
            href="https://wa.me/6281213129318"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            🟢 WhatsApp
          </a>

          <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arcadian.lpk@gmail.com&su=Informasi%20Bootcamp%20Nomadian"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              ✉️ Email
          </a>

          <a
            href="https://instagram.com/nomadian.engineering"
            target="_blank"
            rel="noreferrer"
            className="bg-pink-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            📷 Instagram
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