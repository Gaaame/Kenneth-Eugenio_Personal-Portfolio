import { useEffect, useState } from "react";

function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeaving(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-slate-50 transition-opacity duration-500 ${
        isLeaving ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Decorative Background */}{" "}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />{" "}
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      {/* Loader */}
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          {/* Rotating Ring */}
          <div className="absolute inset-0 animate-spin rounded-2xl border-2 border-dashed border-blue-400" />

          {/* Logo */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white shadow-xl shadow-blue-500/30">
            KE
          </div>
        </div>

        {/* Name */}
        <h1 className="mt-6 text-lg font-bold tracking-wide text-gray-900">
          Kenneth Eugenio
        </h1>

        {/* Loading Text */}
        <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
          <span>Loading</span>
          <span className="flex gap-1">
            <span className="h-1 w-1 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]" />
            <span className="h-1 w-1 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.15s]" />
            <span className="h-1 w-1 animate-bounce rounded-full bg-blue-600" />
          </span>
        </div>

        {/* Progress Line */}
        <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-full origin-left animate-[loading_1.2s_ease-in-out] rounded-full bg-blue-600" />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
