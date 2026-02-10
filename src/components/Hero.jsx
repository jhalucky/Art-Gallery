import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-8 text-ivory">
          <span className="text-[#C6A15B]">Art</span> That Lives
          <br />
          On Walls
        </h1>

        <p className="font-sans text-xs md:text-sm md:tracking-[0.35em] tracking-[0.2em] uppercase text-ivory/70">
          Canvas · Monuments · Architectural Art
        </p>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 text-ivory/50 text-xs tracking-widest uppercase"
      >
        Scroll
      </motion.div>

    </section>
  );
}
