import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ artwork, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!artwork) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
      >
        {/* Image Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative max-w-6xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={artwork.src}
            alt={artwork.title}
            className="w-full max-h-[85vh] object-contain"
          />

          {/* Title + Year */}
          <div className="mt-6 text-center">
            <h2 className="font-serif text-2xl text-ivory">
              {artwork.title}
            </h2>
            <p className="text-sm tracking-widest uppercase text-ivory/60 mt-2">
              {artwork.category} · {artwork.year}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-ivory text-2xl hover:text-ivory/70 transition"
          >
            ✕
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory text-3xl hover:text-ivory/70 transition"
          >
            ‹
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory text-3xl hover:text-ivory/70 transition"
          >
            ›
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
