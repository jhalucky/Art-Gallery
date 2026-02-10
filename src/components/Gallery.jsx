import artworks from "../data/artworks";

export default function Gallery() {
  return (
    <section className="px-6 md:px-16 lg:px-24 pb-32">

      <div className="mb-20 text-center">
        <p className="text-[11px] tracking-[0.45em] uppercase text-ivory/60">
          Artfolio
        </p>
      </div>

      <div className="grid grid-cols-6 md:grid-cols-12 gap-6 auto-rows-[160px]">

        {/* LEFT – small */}
        <ArtCard art={artworks[0]} className="col-span-6 md:col-span-4 row-span-1 md:row-span-4" />
        <ArtCard art={artworks[2]} className="col-span-6 md:col-span-4 row-span-2 md:row-span-2" />
        <ArtCard art={artworks[3]} className="col-span-6 md:col-span-4 row-span-3 md:row-span-2" />
        <ArtCard art={artworks[1]} className="col-span-6 md:col-span-8 row-span-2 md:row-span-2" />

        

        {/* LEFT – wide bottom */}
        <ArtCard art={artworks[4]} className="col-span-12 md:col-span-6 row-span-2" />

        {/* CENTER – big hero */}
        <ArtCard art={artworks[5]} className="col-span-12 md:col-span-6 row-span-2" />

        {/* RIGHT – tall */}
        <ArtCard art={artworks[6]} className="hidden md:block md:col-span-5 md:row-span-6" />

        {/* RIGHT – medium */}
        {/* <ArtCard art={artworks[7]} className="col-span-6 md:col-span-7 row-span-2" /> */}

        {/* EXTRA accents (bottom fill) */}
       {/* EXTRA accents (aligned perfectly) */}
<ArtCard
  art={artworks[8]}
  className="col-span-6 md:col-span-7 row-span-2"
/>

<ArtCard
  art={artworks[9]}
  className="col-span-6 md:col-span-7 row-span-2"
/>

<ArtCard
  art={artworks[7]}
  className="col-span-12 md:col-span-7 row-span-2"
/>


      </div>
    </section>
  );
}

/* ---------- Card ---------- */

function ArtCard({ art, className }) {
  if (!art) return null;

  return (
    <div
      className={`overflow-hidden bg-black/5
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

