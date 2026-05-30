import { motion } from "framer-motion";

function Loader() {

  return (

    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-950 via-slate-900 to-black flex items-center justify-center overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative text-center">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-black tracking-[0.2em] text-white"
        >

          NOMADIAN

        </motion.h1>

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-5 text-blue-200 tracking-[0.3em] text-sm md:text-base"
        >

          ENGINEERING BOOTCAMP

        </motion.p>

        {/* Loading Line */}
        <div className="mt-10 w-56 h-[4px] bg-white/10 rounded-full overflow-hidden mx-auto">

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
            className="w-1/2 h-full bg-cyan-400"
          />

        </div>

      </div>

    </motion.div>

  );
}

export default Loader;