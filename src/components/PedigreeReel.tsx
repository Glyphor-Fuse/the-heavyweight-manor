import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Star } from 'lucide-react';

const dogs = [
  {
    id: 1,
    name: "Sir Winston",
    title: "The Baron",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/the-heavyweight-manor/main/public/images/dog-1.png",
    stats: "65lbs | Rope Nose | Haslet Line",
  },
  {
    id: 2,
    name: "Lady Margaret",
    title: "Iron Maiden",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/the-heavyweight-manor/main/public/images/dog-2.png",
    stats: "58lbs | Wide Set | Royal Blood",
  },
  {
    id: 3,
    name: "Duke Ellington",
    title: "The Brawler",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/the-heavyweight-manor/main/public/images/dog-3.png",
    stats: "70lbs | Heavy Bone | Texas Grit",
  },
  {
    id: 4,
    name: "Duchess Rose",
    title: "Velvet Hammer",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/the-heavyweight-manor/main/public/images/dog-4.png",
    stats: "60lbs | Low Center | Aristocrat",
  },
];

const PedigreeReel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <section className="bg-manor-paper py-24 relative overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto mb-12 px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[2px] w-12 bg-manor-crimson" />
          <h2 className="font-cinzel text-manor-crimson text-sm tracking-widest font-bold">THE LINEAGE</h2>
        </div>
        <h3 className="font-playfair text-4xl md:text-5xl text-manor-dark font-bold">
          The Pedigree Reel
        </h3>
        <p className="font-lato text-manor-dark/70 mt-4 max-w-xl">
          Scroll through the archives of our champions. Hover to witness the gait in motion.
        </p>
      </div>

      {/* Film Strip Container */}
      <div className="relative w-full border-y-[20px] border-manor-dark bg-black py-12">
        {/* Sprocket Holes Top */}
        <div className="absolute top-[-15px] left-0 w-full h-[10px] flex gap-8 px-4">
           {Array.from({ length: 50 }).map((_, i) => (
             <div key={i} className="h-full w-[15px] bg-manor-paper rounded-sm opacity-50" />
           ))}
        </div>

        {/* Horizontal Scroll Area */}
        <div 
          ref={scrollRef} 
          className="flex gap-12 overflow-x-auto px-12 pb-8 pt-4 scrollbar-hide snap-x snap-mandatory"
        >
          {dogs.map((dog) => (
            <div 
              key={dog.id} 
              className="relative min-w-[300px] md:min-w-[400px] h-[500px] snap-center group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-full w-full overflow-hidden border-4 border-manor-gold/30 bg-manor-dark shadow-2xl transition-all duration-500 group-hover:border-manor-gold group-hover:scale-[1.02]">
                
                {/* Image - Sepia by default, Full Color on Hover */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={dog.image}
                    alt={dog.name}
                    className="h-full w-full object-cover transition-all duration-700 filter sepia-[.8] brightness-75 contrast-125 grayscale-[0.3] group-hover:sepia-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0"
                  />
                  {/* Grain Overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 mix-blend-overlay group-hover:opacity-10 transition-opacity" />
                </div>

                {/* Overlay Text - Fades out on Hover to reveal "Video" */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 transition-opacity duration-500 group-hover:opacity-0">
                  <span className="font-cinzel text-manor-gold text-xs tracking-widest mb-2">{dog.title}</span>
                  <h4 className="font-playfair text-3xl text-white font-bold mb-2">{dog.name}</h4>
                  <div className="h-[1px] w-full bg-manor-gold/50 my-2" />
                  <p className="font-lato text-manor-limestone text-sm">{dog.stats}</p>
                </div>

                {/* Hover "Play" State Indicator */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
                  <div className="rounded-full bg-manor-crimson/80 p-4 text-white backdrop-blur-sm">
                    <Film className="h-8 w-8 animate-pulse" />
                  </div>
                </div>
              </div>
              
              {/* Film Frame Number */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs text-manor-limestone/50">
                FRAME 00{dog.id}
              </div>
            </div>
          ))}
        </div>

        {/* Sprocket Holes Bottom */}
        <div className="absolute bottom-[-15px] left-0 w-full h-[10px] flex gap-8 px-4">
           {Array.from({ length: 50 }).map((_, i) => (
             <div key={i} className="h-full w-[15px] bg-manor-paper rounded-sm opacity-50" />
           ))}
        </div>
      </div>
    </section>
  );
};

export default PedigreeReel;
