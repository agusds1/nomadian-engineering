function Loader() {

  return (

    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[9999]">

      <div className="text-center">

        {/* Circle */}
        <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        {/* Text */}
        <h1 className="mt-8 text-3xl font-black text-white tracking-widest">

          NOMADIAN

        </h1>

        <p className="text-blue-300 mt-3">

          Loading Engineering Future...

        </p>

      </div>

    </div>

  );
}

export default Loader;