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

  const whatsappNumber = import.meta.env.WA_NUMBER; // 🔴 Replace with real number
  const message = `Hello, I am interested in the artwork "${artwork.title}" from Shri Nath Art Gallery.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

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
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative max-w-6xl w-full text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={artwork.src}
            alt={artwork.title}
            className="w-full mt-8 max-h-[80vh] object-contain"
          />


          <div className="mt-6">
            <h2 className="font-serif text-2xl text-ivory">
              {artwork.title}
            </h2>
            <p className="text-sm tracking-widest uppercase text-ivory/60 mt-2">
              {artwork.category} · {artwork.year}
            </p>
          </div>

        
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-10 px-8 py-3 
                       border border-[#C6A15B] 
                       text-[#C6A15B] 
                       tracking-widest text-xs uppercase
                       transition-all duration-500
                       hover:bg-[#C6A15B] hover:text-black"
          >
            Contact Us
          </a>

     
          <button
            type="button"
            onClick={onClose}
            className="fixed top-4 right-4 z-[60] w-12 h-12 flex items-center justify-center
                       rounded-full bg-white/10 text-[#C6A15B] text-2xl
                       hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Arrows – fixed to viewport */}
          <button
            type="button"
            onClick={onPrev}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 flex items-center justify-center
                       rounded-full bg-white/10 text-[#C6A15B] text-3xl
                       hover:bg-white/20 transition-colors"
            aria-label="Previous"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={onNext}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 flex items-center justify-center
                       rounded-full bg-white/10 text-[#C6A15B] text-3xl
                       hover:bg-white/20 transition-colors"
            aria-label="Next"
          >
            ›
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
