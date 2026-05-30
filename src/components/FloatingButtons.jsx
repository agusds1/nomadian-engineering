import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function FloatingButton() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      // tombol muncul setelah melewati hero section
      if (window.scrollY > 700) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-50
      bg-blue-900 text-white
      w-14 h-14 md:w-16 md:h-16
      rounded-full
      flex items-center justify-center
      shadow-2xl
      hover:scale-110
      hover:-translate-y-1
      hover:shadow-blue-500/40
      transition-all duration-300

      ${
        showButton
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }
      `}
    >

      <ArrowUp size={26} />

    </button>

  );
}

export default FloatingButton;