import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-manor-dark text-manor-limestone">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/Glyphor-Fuse/the-heavyweight-manor/main/public/images/hero-bulldog.png"
          alt="Champion Bulldog in a dusty barn"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-manor-dark via-manor-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <span className="font-cinzel text-lg font-bold tracking-[0.3em] text-manor-gold uppercase">
            Est. 2024 • Haslet, Texas
          </span>
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tight text-white drop-shadow-2xl">
            THE <br />
            <span className="text-manor-crimson">HEAVYWEIGHT</span> <br />
            MANOR
          </h1>
          <p className="mx-auto max-w-2xl font-lato text-xl font-light tracking-wide text-manor-limestone/80 md:text-2xl">
            Rejecting the cute. Embracing the champion. <br />
            Artisanal English Bulldogs built for structural power and stubborn elegance.
          </p>
          
          <div className="pt-10">
            <button className="group relative overflow-hidden border-2 border-manor-gold bg-transparent px-10 py-4 font-cinzel text-sm font-bold tracking-widest text-manor-gold transition-all hover:bg-manor-gold hover:text-manor-dark">
              <span className="relative z-10">ENTER THE RING</span>
              <div className="absolute inset-0 -z-0 h-full w-full translate-y-full bg-manor-gold transition-transform duration-300 group-hover:translate-y-0" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer / Scroll Indicator */}
      <div className="absolute bottom-10 left-0 w-full text-center z-10">
        <span className="font-cinzel text-xs tracking-[0.5em] text-manor-limestone opacity-50">
          SCROLL FOR PEDIGREE
        </span>
      </div>
    </section>
  );
};

export default Hero;
