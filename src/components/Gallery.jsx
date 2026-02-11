import artworks from "../data/artworks";
import { useState } from "react";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightBox = (index) => setSelectedIndex(index);
  const closeLightBox = () => setSelectedIndex(null);

  const nextArtwork = () =>
    setSelectedIndex((prev) =>
      prev === artworks.length - 1 ? 0 : prev + 1
    );

  const prevArtwork = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? artworks.length - 1 : prev - 1
    );

  return (
    <section className="px-6 md:px-16 lg:px-24 pb-32">
      <div className="mb-20 text-center">
        <p className="text-[11px] tracking-[0.45em] uppercase text-ivory/60">
          Artfolio
        </p>
      </div>

      <div className="grid grid-cols-6 md:grid-cols-12 gap-6 auto-rows-[160px]">

        <ArtCard art={artworks[0]} index={0} openLightBox={openLightBox}
          className="col-span-6 md:col-span-4 row-span-1 md:row-span-4 border-8 border-[#C6A15B]" />

        <ArtCard art={artworks[2]} index={2} openLightBox={openLightBox}
          className="col-span-6 md:col-span-4 row-span-2 md:row-span-2 border-8 border-[#C6A15B]" />

        <ArtCard art={artworks[3]} index={3} openLightBox={openLightBox}
          className="col-span-6 md:col-span-4 row-span-3 md:row-span-2 border-8 border-[#C6A15B]" />

        <ArtCard art={artworks[1]} index={1} openLightBox={openLightBox}
          className="col-span-6 md:col-span-8 row-span-2 md:row-span-2 border-8 border-[#C6A15B]" />

        <ArtCard art={artworks[4]} index={4} openLightBox={openLightBox}
          className="col-span-12 md:col-span-6 row-span-2 border-8 border-[#C6A15B]" />

        <ArtCard art={artworks[5]} index={5} openLightBox={openLightBox}
          className="col-span-12 md:col-span-6 row-span-2 border-8 border-[#C6A15B]" />

        <ArtCard art={artworks[6]} index={6} openLightBox={openLightBox}
          className="hidden md:block md:col-span-5 md:row-span-6 border-8 border-[#C6A15B]" />

        <ArtCard art={artworks[8]} index={8} openLightBox={openLightBox}
          className="col-span-6 md:col-span-7 row-span-2 border-8 border-[#C6A15B]" />

         <ArtCard art={artworks[9]} index={9} openLightBox={openLightBox} 
           className="col-span-6 md:col-span-7 row-span-2 border-10 border-[#C6A15B]" /> 

        <ArtCard art={artworks[7]} index={7} openLightBox={openLightBox}
          className="col-span-12 md:col-span-7 row-span-2 border-8 border-[#C6A15B]" />

      </div>

      {/* Lightbox */}
      <Lightbox
        artwork={selectedIndex !== null ? artworks[selectedIndex] : null}
        onClose={closeLightBox}
        onNext={nextArtwork}
        onPrev={prevArtwork}
      />
    </section>
  );
}

/* ---------- Card ---------- */

function ArtCard({ art, className, index, openLightBox }) {
  if (!art) return null;

  return (
    <div
      onClick={() => openLightBox(index)}
      className={`overflow-hidden cursor-pointer
                  border border-ivory/20
                  shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                  transition-transform duration-700
                  hover:scale-[1.02]
                  ${className}`}
    >
      <img
        src={art.src}
        alt={art.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
